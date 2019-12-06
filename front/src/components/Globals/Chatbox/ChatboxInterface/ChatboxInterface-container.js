import React from 'react';
import { connect } from 'react-redux';

import ChatboxInterfaceView from './ChatboxInterface-view';
import socket from '../../../../socket';
import { onChange } from '../../../../utils';
import { Auth } from '../../../../services';
import translations from './translations';
import '../Chatbox.scss';

/**
 * @typedef {{ username: String, text: String, id: Number, socketId: String, target: String? }} Message
 */

const mapStateToProps = state => ({
  user: state.clientReducer.user,
  language: state.clientReducer.language,
});

let i = 0;

class ChatboxInterfaceContainer extends React.PureComponent {

  messages = {
    'rgthghr': [
      {
        id: i++,
        text: 'text',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: 'something',
        socketId: 'thhtththth'
      },
      {
        id: i++,
        text: 'thj',
        socketId: 'thhtththth'
      },
      {
        id: i++,
        text: 'rhtth',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
      {
        id: i++,
        text: '-juyjjy',
        socketId: 'rgthghr'
      },
    ]
  };

  state = {
    users: [],
    messages: {},
    messageValue: '',
    mySocketId: 'rgthghr',
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
    socket.off('getMessagesSuccess', this.setMessages);
    socket.off('getNewMessageSuccess', this.addMessage);
    socket.off('getMySocketSuccess', this.getMySocketSuccess);
  }

  getMySocketSuccess = id => {
    //this.setState({ mySocketId: id });
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
  addMessage = ({ users, message }) => {
    this.setState(state => ({
      messages: {
        ...state.messages,
        [message.target || message.socketId]: (state.messages[message.target || message.socketId] || []).concat([message])
      },
      users: users || [],
    }));
  }

  onSubmit = e => {
    e.preventDefault();
    const { messageValue, currentUser } = this.state;

    const message = {
      text: messageValue,
    };

    if (Auth.isLogged()) {
      message.username = Auth.getUser().username;
    }

    if (Auth.isAdmin()) {
      message.admin = true;
      message.target = currentUser.id;
    }

    console.log(message);

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

    return this.messages[
      Auth.isAdmin()
        ? currentUser.id
        : mySocketId
    ] || [];
  }

  render() {
    const { messageValue, users, currentUser, mySocketId } = this.state;
    const { onClose, language } = this.props;

    return <ChatboxInterfaceView
      translations={translations[language]}
      users={users}
      currentUser={currentUser}
      messages={this.getRightMessages()}
      onItemClick={this.onItemClick}
      onChange={this.onChange}
      messageValue={messageValue}
      onSubmit={this.onSubmit}
      onClose={onClose}
      isAdmin={Auth.isAdmin()}
      mySocketId={mySocketId}
    />
    }
  }

export default connect(mapStateToProps)(ChatboxInterfaceContainer);
