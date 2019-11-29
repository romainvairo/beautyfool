const { writeFile } = require('./fsPromise');
const { getPreviousDir } = require('../utils');
const { accessFolder } = require('.');

/**
 * create a file and all folders that doesn't already exist
 * and write the data to the file
 * @param {String} path
 * @param {*} data
 * @returns {Promise}
 */
const createFile = async (path, data) => {
  await accessFolder(getPreviousDir(path));

  await writeFile(path, data, 'binary');
}

module.exports = createFile;
