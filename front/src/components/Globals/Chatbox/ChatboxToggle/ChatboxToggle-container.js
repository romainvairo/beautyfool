import React from 'react';
import { connect } from 'react-redux';

import ChatboxToggleView from './ChatboxToggleView';


const mapStateToProps = state => ({

});

class ChatboxToggleContainer extends React.PureComponent {
  state = {
    isToggle: false,
  }

  setIsToggle = () => {
     this.setState({isToggle: !this.state.isToggle});
  }
  render() {
    const { isToggle } = this.state;
    return <ChatboxToggleView isToggle={isToggle} setIsToggle={this.setIsToggle}/>;
  }
}

export default connect(mapStateToProps)(ChatboxToggleContainer);
