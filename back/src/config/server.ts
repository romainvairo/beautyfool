import express from 'express';
import http from 'http';

import { debug } from './debug';

const port = 8000;

// create an app express to handle the http server
const app = express();
const server = new http.Server(app);

// make the server listen on a specific port
server.listen(port, () => debug.server(`Http server listening on port ${port}`));

export {
  server,
  app,
  port,
};
