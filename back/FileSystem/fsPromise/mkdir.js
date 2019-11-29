const fs = require('fs');

/**
 * wraps the native `fs.mkdir` into a `Promise`
 * @param {String} path
 * @returns {Promise}
 */
const mkdir = path => new Promise((resolve, reject) => {
  fs.mkdir(path, (err) => {
    if (err) {
      return reject(err);
    }

    resolve();
  });
});

module.exports = mkdir;
