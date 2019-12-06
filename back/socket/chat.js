const { debug } = require('../config');

let messages = {};
let users = {};
let id = 0;
let adminSocket;
let sockets = {};

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

    const targetId = message.target || socket.id;

    sockets[socket.id] = socket;
    message.socketId = socket.id;
    message.username = message.username || 'guest-' + socket.id;

    if (!message.admin) {
      users[socket.id] = message.username;
    }

    setTimeout(() => {
      messages[targetId] = (messages[targetId] || []).filter(m => m.id !== message.id);

      if (!messages[targetId].length) {

        // delete property from an object
        delete messages[targetId];
        delete users[socket.id];

        if (adminSocket) {
          getMessagesSuccess(adminSocket);
        }
      }
    }, 1000 * 60 * 60);

    addMessage(targetId, message);
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

  if (!adminSocket || socket.id !== adminSocket.id) {
    socket.emit('getNewMessageSuccess', { message });
  }

  if (message.target && sockets[message.target]) {
    sockets[message.target].emit('getNewMessageSuccess', { message });
  }

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
