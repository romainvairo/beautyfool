import _ from 'lodash';

import { SocketHandlerBuilder } from './SocketHandlerBuilder';

export class SocketHandler {

  /**
   * @property {SocketIO.Socket} socket
   */
  socket;

  /**
   * contains all the event that have been created
   * @property {Object} events
   * @public
   */
  events = {};

  /**
   *
   * @param {SocketIO.Socket} socket
   */
  constructor(thisArg, socket) {
    this.socket = socket;

    // get `componentWillUnmount` of the caller if it exists and is a function
    const callerUnmount = _.isFunction(thisArg.componentWillUnmount)
      ? thisArg.componentWillUnmount
      : () => { };

    // replace the caller's `componentWillUnmount` with another function
    // that will call its `componentWillUnmount` with the one of the current instance
    thisArg.componentWillUnmount = () => {
      // call and give it its context so that it keeps its context
      callerUnmount.call(thisArg);
      this.componentWillUnmount();
    }
  }

  componentWillUnmount() {
    this.removeAllListeners();
  }

  /**
   * create a new event
   * @param {string} eventName
   * @returns {SocketHandlerBuilder}
   */
  newEvent(eventName) {
    const socketBuilder = new SocketHandlerBuilder(this.socket, eventName);

    this.events[eventName] = socketBuilder;

    return socketBuilder;
  }

  /**
   * remove all the event listeners
   */
  removeAllListeners() {
    _.forIn(this.events, event => {
      event.eventRemovers.forEach(eventRemove => eventRemove());
    });
  }
}
