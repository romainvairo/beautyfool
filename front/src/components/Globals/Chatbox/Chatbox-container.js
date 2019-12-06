import React from 'react';

import ChatboxView from './Chatbox-view';

class ChatboxContainer extends React.PureComponent {
  state = {
    isToggle: false,
  }

  setIsToggle = () => {
     this.setState(state => ({ isToggle: !state.isToggle }));
  }
  render() {
    const { isToggle } = this.state;
    return <ChatboxView isToggle={isToggle} setIsToggle={this.setIsToggle}/>;
  }
}

export default ChatboxContainer;
