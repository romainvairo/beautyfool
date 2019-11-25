export class Listeners {

  /**
   * @property {SocketIO.Socket} socket
   */
  socket;

  /**
   * @property {String} eventName
   */
  eventName;

  /**
   * function that will create the listeners
   * @property {Function} listenerCreator
   */
  listenerCreator;

  /**
   *
   * @param {SocketIO.Socket} socket
   * @param {string} eventName
   * @param {Function} listenerCreator
   */
  constructor(socket, eventName, listenerCreator) {
    this.socket = socket;
    this.eventName = eventName;
    this.listenerCreator = listenerCreator;
  }

  /**
   * create a success listener
   * @param {Function} callback
   */
  success(callback) {
    this.listenerCreator(this.socket, this.eventName + 'Success')(callback);
    return this;
  }

  /**
   * create a fail listener
   * @param {Function} callback
   */
  fail(callback) {
    this.listenerCreator(this.socket, this.eventName + 'Fail')(callback);
    return this;
  }

}
