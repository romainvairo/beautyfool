const express = require('express');
const http = require('http');
const cors = require('cors');

const { debug } = require('./debug');

const port = 8000;

// create an app express to handle the http server
const app = express();
// cors origin URL - Allow inbound traffic from origin
const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors());
const server = new http.Server(app);

// make the server listen on a specific port
server.listen(process.env.PORT || port);

module.exports = {
  server,
  app,
  port,
};
