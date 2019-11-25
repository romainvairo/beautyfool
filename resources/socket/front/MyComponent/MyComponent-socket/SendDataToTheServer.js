import { SocketBridge } from '/services';

/**
 * when the class is instanciated
 * `this.context` is the context of the caller (caller's `this`)
 * you can call `this.emit('eventName)` to call your event from outside this object
 */
class SendDataToTheServer extends SocketBridge {

  // function to call in the functions `componentDidMount`
  init() {
    // this will create an event, which will call
    // `this.success` if the response is a success
    // `this.fail` if the response is a fail
    // you can call `.emit()` if you want to emit the event directly when initializing
    this.listen('myEvent');
  }

  /**
   * @param {Object} response
   * @param {*} response.data data sent from the server
   */
  success = ({ data }) => {

  }

  /**
   * @param {Object} response
   * @param {String} response.error error sent from the server
   */
  fail = ({ error }) => {

  }

}

export default SendDataToTheServer;
