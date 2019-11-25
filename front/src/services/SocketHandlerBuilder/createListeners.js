import { listenersCreator } from './listenersCreator';
import { baseSocket } from './baseSocket';

/**
 * create a listener
 * @var {Function} createListener
 */
const createListener = baseSocket('on');

// interface of listeners creation
export const createListeners = listenersCreator(createListener);
