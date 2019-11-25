import { baseSocket } from './baseSocket';

/**
 * create an emitter
 * @var {Function} createEmitter
 */
export const createEmitter = baseSocket('emit');
