import React from 'react';
import { connect } from 'react-redux';

import DropdownContainer from './Dropdown/Dropdown-container';
import ChatboxView from './Chatbox-view';
import translations from './translations';
import socket from '../../../socket';
import { onChange } from '../../../utils';
import { Auth } from '../../../services';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

/**
 * @typedef {{ username: String, text: String, id: Number, socketId: String }} Message
 */

class ChatboxContainer extends React.PureComponent {

  state = {
    users: [],
    messages: {},
    messageValue: '',
    mySocketId: '',
    currentUser: {},
  };

  componentDidMount() {
    window.log = () => {
      Auth.signup({
        username: 'zougui',
        roles: [
          {
            id: 'rtg2rt51',
            name: 'admin',
            permission: 'ROLE_ADMIN'
          }
        ]
      });

      socket.emit('getAdminSocket');
    }

    // emit an event to get the messages
    // Trigger the event listener in the server
    socket.emit('getMessages');
    // create socket listeners
    socket.on('getMessagesSuccess', this.setMessages);
    socket.on('getNewMessageSuccess', this.addMessage);
    socket.on('getMySocketSuccess', this.getMySocketSuccess);
    socket.emit('getMySocket');
  }

  componentWillUnmount() {
    // remove the socket listeners
    socket.removeListener('getMessagesSuccess', this.setMessages);
    socket.removeListener('getNewMessageSuccess', this.addMessage);
    socket.removeListener('getMySocketSuccess', this.getMySocketSuccess);
  }

  getMySocketSuccess = id => {
    this.setState({ mySocketId: id });
  }

  setMessages = data => {
    this.setState({
      users: data.users || [],
      messages: data.messages || data,
    });
  }

  /**
   * @param {Object} data
   * @param {Message} data.message
   * @param {Array} data.users
   */
  addMessage = data => {
    this.setState(state => ({
      messages: {
        ...state.messages,
        [data.message.socketId]: (state.messages[data.message.socketId] || []).concat([data.message])
      },
      users: data.users || [],
    }));
  }

  onSubmit = e => {
    e.preventDefault();
    const { messageValue } = this.state;

    const message = {
      text: messageValue,
    };

    if (Auth.isLogged()) {
      message.username = Auth.getUser().username;
    }

    if (Auth.isAdmin()) {
      message.admin = true;
    }

    socket.emit('newMessage', message);
    this.setState({ messageValue: '' });
  }

  onChange = onChange(this);

  onItemClick = user => {
    this.setState({ currentUser: user });
    socket.emit('getMessages');
  }

  getRightMessages = () => {
    const { messages, mySocketId, currentUser } = this.state;

    console.log('isAdmin', Auth.isAdmin(), currentUser.id);

    return messages[
      Auth.isAdmin()
        ? currentUser.id
        : mySocketId
    ] || [];
  }

  render() {
    const { language } = this.props;
    const { messages, messageValue, mySocketId, users, currentUser } = this.state;

    console.log(this.getRightMessages())

    return <ChatboxView
      users={users}
      translations={translations[language]}
      currentUser={currentUser}
      messages={this.getRightMessages()}
      onItemClick={this.onItemClick}
      onChange={this.onChange}
      messageValue={messageValue}
      onSubmit={this.onSubmit}
    />;
  }
}

export default connect(mapStateToProps)(ChatboxContainer);
