const { mkdir } = require('./fsPromise');
const { getPreviousDir } = require('../utils');
const { accessFolder } = require('.');

/**
 * create all folders from a path if they don't already exist
 * @param {String} path
 * @returns {Promise}
 */
const createFolder = async path => {
  await accessFolder(getPreviousDir(path));

  // create folder with the current path
  await mkdir(path);
}

module.exports = createFolder;
