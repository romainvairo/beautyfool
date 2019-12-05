const { debug } = require('../config');

let messages = {};
let users = {};
let id = 0;
let adminSocket;

/**
 * add a message for the corresponsing `socketId`
 * @param {String} socketId
 * @param {Object} message
 */
const addMessage = (socketId, message) => {
  if (!messages[socketId]) {
    messages[socketId] = [];
  }

  messages[socketId].push(message);
}

// listeners

exports.getAdminSocket = socket => {
  socket.on('getAdminSocket', () => {
    debug.socket.on('getAdminSocket');

    adminSocket = socket;
  });
}

exports.getMySocket = socket => {
  socket.on('getMySocket', () => {
    debug.socket.on('getMySocket');
    getMySocketSuccess(socket);
  });
}

exports.newMessage = socket => {
  socket.on('newMessage', message => {
    debug.socket.on('newMessage');
    message.id = id++;

    message.socketId = socket.id;
    message.username = message.username || 'guest-' + socket.id;
    users[socket.id] = message.username;

    setTimeout(() => {
      messages[socket.id] = (messages[socket.id] || []).filter(m => m.id !== message.id);

      if (!messages[socket.id].length) {

        // delete property from an object
        delete messages[socket.id];
        delete users[socket.id];

        if (adminSocket) {
          getMessagesSuccess(adminSocket);
        }
      }
    }, 1000 * 60 * 60);

    addMessage(socket.id, message);
    getNewMessageSuccess(socket, message);
  });
}

exports.getMessages = socket => {
  socket.on('getMessages', () => {
    debug.socket.on('getMessages');

    getMessagesSuccess(socket);
  });
}

// emitters

const getMessagesSuccess = socket => {
  debug.socket.emit('getMessagesSuccess');

  if (!adminSocket || socket.id !== adminSocket.id) {
    socket.emit('getMessagesSuccess', messages[socket.id] || []);
  }

  if (adminSocket) {
    adminSocket.emit('getMessagesSuccess', {
      users: Object.entries(users).map(u => ({ id: u[0], name: u[1] })),
      messages: messages
    });
  }
}

const getNewMessageSuccess = (socket, message) => {
  debug.socket.emit('getNewMessageSuccess');

  socket.emit('getNewMessageSuccess', { message });

  if (adminSocket) {
    adminSocket.emit('getNewMessageSuccess', {
      message,
      users: Object.entries(users).map(u => ({ id: u[0], name: u[1] })),
    });
  }
}

const getMySocketSuccess = socket => {
  debug.socket.emit('getMySocketSuccess');
  socket.emit('getMySocketSuccess', socket.id);
}
