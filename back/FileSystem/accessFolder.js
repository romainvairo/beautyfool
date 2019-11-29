const { exists } = require('./fsPromise');
const { getPreviousDir } = require('../utils');

/**
 * create all folders from a path if they don't already exist
 * @param {String} path
 * @returns {Promise}
 */
const createFolder = async path => {
  const previousPath = getPreviousDir(path);

  // ask if previous path exist
  const exist = await exists(previousPath);

  // if it doesn't exist, it create a folder with previous path
  if (!exist) {
    await createFolder(previousPath);
  }
}

module.exports = createFolder;
