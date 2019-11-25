import { Listeners } from './Listeners';

/**
 * will make a function to create listeners
 * @param {Function} createListener function that will create the listeners
 */
export const listenersCreator = createListener => (socket, event) =>
  new Listeners(socket, event, createListener);
