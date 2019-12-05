const { debug, io } = require('../config');
const { newMessage, getMessages, getAdminSocket, getMySocket } = require('./chat');

// connection between client and server
// socket client's data
io.on('connection', socket => {
  debug.socket.on('connection');

  newMessage(socket);
  getMessages(socket);
  getAdminSocket(socket);
  getMySocket(socket);
});
