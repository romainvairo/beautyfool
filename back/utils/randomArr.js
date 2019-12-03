const { random } = require('.');

/**
 * get a random item from an array
 * @template T
 * @param {T[] | String} array
 * @returns {T | String}
 */
module.exports = function randomArr(array) {
  return array[random(0, array.length - 1)];
}
