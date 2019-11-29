const { random } = require('.');

/**
 * get a random item from an array
 * @param {Array | String} array
 * @returns {*}
 */
module.exports = function randomArr(array) {
  return array[random(0, array.length - 1)];
}
