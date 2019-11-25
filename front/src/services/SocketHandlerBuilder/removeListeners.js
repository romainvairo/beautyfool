import { listenersCreator } from './listenersCreator';
import { baseSocket } from './baseSocket';

/**
 * create a function that will remove an event listener
 * @var {Function} removeListener
 */
const removeListener = baseSocket('removeListener');

// create a function that will make the listeners remover
export const removeListeners = listenersCreator(removeListener);
