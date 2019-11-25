import { createEmitter } from './createEmitter';
import { createListeners } from './createListeners';
import { removeListeners } from './removeListeners';

export class SocketHandlerBuilder {

  /**
   * name of the event
   * @property {string} eventName
   * @private
   */
  eventName;

  /**
   * @property {SocketIO.Socket} socket
   * @private
   */
  socket;

  /**
   * contains functions that will remove event listeners when called
   * @property {Function[]} eventRemovers
   * @public
   */
  eventRemovers = [];

  /**
   * @property {Function} emitter
   * @private
   */
  emitter;

  /**
   *
   * @param {SocketIO.Socket} socket
   * @param {string} eventName
   * @public
   */
  constructor(socket, eventName) {
    this.socket = socket;
    this.eventName = eventName;

    this.createEmitter();
  }

  /**
   * create an emitter
   * @returns {this}
   * @public
   */
  createEmitter() {
    this.emitter = createEmitter(this.socket, this.eventName);
    return this;
  }

  /**
   * call the emitter with the given `data`
   * @param {*} data
   * @returns {this}
   * @public
   */
  emit(data) {
    this.emitter(data);
    return this;
  }

  /**
   * create listeners
   * @returns {this}
   * @public
   */
  createListeners() {
    const _listeners = createListeners(this.socket, this.eventName);
    const remover = removeListeners(this.socket, this.eventName);

    /**
     * create a listener
     * @param {string} type must be `success` or `fail`
     * @param {Object} thisArg object to return
     */
    const createListener = (type, toReturn) => callback => {
      _listeners[type](callback);
      this.eventRemovers.push(() => remover[type](callback));
      return toReturn;
    }

    const listeners = {};
    listeners.success = createListener('success', listeners);
    listeners.fail = createListener('fail', listeners);
    // put the emittion into the chain
    listeners.emit = data => this.emit.call(this, data);

    return listeners;
  }
}
