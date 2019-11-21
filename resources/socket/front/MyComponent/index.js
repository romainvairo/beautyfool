import React from 'react';

import MyComponentSocket from './MyComponent-socket';

class MyComponent extends React.PureComponent {

  // need the context to remove all listeners before the component unmounts
  socket = new MyComponentSocket(this);

  componentDidMount() {
    // initialize the socket handler
    this.socket.init();

    // the `emit` function will return the emitter that have the name "sendDataToTheServer"
    // the returned function will call the emitter and send to the server the string "some data"
    this.socket.emit('sendDataToTheServer')('some data');
  }


  render() {
    return null;
  }
}

export default MyComponent;
