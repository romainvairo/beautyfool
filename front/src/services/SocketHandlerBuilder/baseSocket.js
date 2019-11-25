/**
 * the base for socket actions
 * @param {string} action
 * @returns {Function}
 */
export const baseSocket = action => (socket, eventName) => data => socket[action](eventName, data);
