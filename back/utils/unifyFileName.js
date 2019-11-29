const { passwordGenerator } = require('../services');

/**
 * unify a file name
 * @param {String} fileName
 * @returns {String}
 */
module.exports = function unifyFileName(fileName) {
  // separate the extension from the file name
  const fileNameParts = fileName.split('.');
  // get the extension
  const ext = fileNameParts.pop();
  // re-assemblate the original file name with a random string in its name
  return `${fileNameParts.join('.')}.${passwordGenerator()}.${ext}`;
}
