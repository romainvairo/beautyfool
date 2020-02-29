const express = require('express');
const http = require('http');

const { debug } = require('./debug');

const port = 8000;

// create an app express to handle the http server
const app = express();
const server = new http.Server(app);

// make the server listen on a specific port
server.listen(process.env.PORT || port);

module.exports = {
  server,
  app,
  port,
};
