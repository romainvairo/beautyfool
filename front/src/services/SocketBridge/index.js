import { has, isFunction } from 'lodash';
import { SocketHandler } from '../SocketHandler';
import socket from '../../socket';
import { MainSocketBridge } from './MainSocketBridge';

export class SocketBridge {

  static Main = MainSocketBridge

  /**
   * @property {SocketHandler} event
   * @private
   */
  event;

  /**
   * caller's context
   * @property {Object} context
   * @private
   */
  context;

  /**
   * @param {Object} thisArg caller's context
   */
  constructor(thisArg) {
    this.context = thisArg;
    this.event = new SocketHandler(thisArg, socket);
  }

  /**
   * get if there is an event for name `name`
   * @param {String} name
   * @returns {Boolean}
   */
  hasEvent = name => has(this.event.events, name);

  /**
   * will create an event with name `name` and will use `this.success` and `this.fail` to respectively handle the `success` and `fail` cases if the handlers are defined.
   * @param {String} name
   * @returns {Object}
   */
  listen = name => {
    let event = this.event.newEvent(name).createListeners();

    const handle = handleName =>
      isFunction(this[handleName]) && event[handleName](this[handleName]);

    handle('success');
    handle('fail');

    return event;
  }

  /**
   * @param {String} name name of the event
   * @returns {Function} function that will emit the event
   */
  emit = name => (...args) => {
    const event = this.event.events[name];

    if (!event) {
      throw new Error(`There is no event called "${name}"`);
    }

    return event.emit(...args);
  }
}
