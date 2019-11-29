const socket = require('socket.io');

const { server } = require('./server');

// link the server with the client
exports.io = socket(server);
