import { SocketHandlerBuilder } from '/services';

export class Something {

  public sendDataToTheServer = new SocketHandlerBuilder('sendDataToTheServer')
    // create a listener for the socket event "sendDataToTheServer"
    // if the function in listener throws an error it will emit
    // a fail, otherwise it will emit a success
    .createListener(data => {
      if (data == null) {
        throw new Error('No data received');
      }
    });

}
