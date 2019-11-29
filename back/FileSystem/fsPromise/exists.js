const fs = require('fs');

/**
 * wraps the native `fs.exists` into a `Promise`
 * @param {String} path
 * @returns {Promise<Boolean>}
 */
const exists = path => new Promise(resolve => {
  fs.exists(path, exist => {
    resolve(exist);
  });
});

module.exports = exists;
