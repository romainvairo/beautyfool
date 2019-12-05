const { random, randomArr } = require('../utils');

const characters = 'abcdefghijklmnopqrstuvwxyz';

/**
 * generate a password
 * @returns {String}
 */
module.exports = function passwordGenerator(minLength = 8, maxLength = 15) {
  let password = '';
  // define the length of the password
  const length = random(minLength, maxLength);

  for (let i = 0; i < length; i++) {
    const j = random(0, 2);

    /**
     * 1/3 of chance to get an uppercase character
     * 1/3 of chance to get a lowercase character
     * 1/3 of chance to get a number
     */
    if (j <= 1) {
      let character;
      while (!character) {
        character = randomArr(characters);
      }

      if (j === 0) {
        password += character.toUpperCase();
      } else {
        password += character.toLowerCase();
      }
    } else {
      password += random(0, 9);
    }
  }

  return password;
}
