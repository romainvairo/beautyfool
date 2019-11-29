const fs = require('fs');

/**
 * wraps the native `fs.writeFile` into a `Promise`
 * @param {String} path
 * @param {*} data
 * @param {Object} options
 * @returns {Promise}
 */
const writeFile = (path, data, options) => new Promise((resolve, reject) => {
  fs.writeFile(path, data, options, (err) => {
    if (err) {
      return reject(err);
    }

    resolve();
  });
});

module.exports = writeFile;
