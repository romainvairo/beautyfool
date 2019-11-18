import chalk from 'chalk';
import debug from 'debug';
import { Debugs } from './debug.types';

const appName = 'beautyfool';

const namespaceCreator = (namespaceName: string) => (name: string) => namespaceName + ':' + name;

const namespace = namespaceCreator(appName);

const debugs: Debugs = {
  appName: appName,
  chalk: chalk,

  // will send debug messages related to the server
  server: debug(namespace('server')),
  // will send debug messages related to mongoose
  mongoose: debug(namespace('mongoose')),
  socket: {
    // will send debug messages related to the socket listeners
    on: debug(namespace('socket:on')),
    // will send debug messages related to the socket emitters
    emit: debug(namespace('socket:emit')),
  },
};

export { debugs as debug };
