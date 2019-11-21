import { io } from '/config';
import { SocketHandlerBuilder } from '/services';
import { Something } from './Something';

io.on('connection', socket => {
  // listen all handlers for each socket connection
  SocketHandlerBuilder.listenHandlers(socket, [
    new Something(),
  ]);
});
