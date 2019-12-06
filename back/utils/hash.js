const bcrypt = require('bcrypt');

const salt = 10;

/**
 * Hashes the given data
 * @param {*} data
 * @returns {Promise<String>}
 */
module.exports = data => new Promise((resolve, reject) => {
  // generate a salt
  bcrypt.genSalt(salt, (err, salt) => {
    // reject the error if any
    if (err) {
      return reject(err);
    }

    // generate hash
    bcrypt.hash(data, salt, (err, hash) => {
      if (err) {
        return reject(err);
      }

      // resolves the hash
      resolve(hash);
    });
  });
});
