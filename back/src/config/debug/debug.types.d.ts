import { Chalk } from 'chalk';
import { Debugger } from 'debug';

export interface Debugs {
  appName: string;
  chalk: Chalk;

  server: Debugger;
  mongoose: Debugger;

  socket: {
    on: Debugger;
    emit: Debugger;
  }
}
