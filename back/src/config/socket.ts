import socket from 'socket.io';

import { server } from './server';

// link the server with the client
export const io = socket(server);
