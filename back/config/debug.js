const chalk = require('chalk');
const debug = require('debug');

const appName = 'beautyfool';

const namespaceCreator = namespaceName => name => namespaceName + ':' + name;

const namespace = namespaceCreator(appName);

const debugs = {
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

exports.debug = debugs;
