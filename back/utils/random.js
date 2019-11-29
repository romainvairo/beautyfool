/**
 * get a random number between `min` and `max`
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
module.exports = function random(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}
