const path = require('path');

const { createFile } = require('../FileSystem');
const { unifyFileName } = require('../utils');

/**
 * create a file
 * @param {Object} fileData
 * @param {String} fileData.type
 * @param {String} fileData.fileName
 * @param {*} fileData.buffer
 * @returns {Promise<{ filePath: String, fileUri: String }>}
 */
module.exports = async function fileWriter(fileData) {
  // make the file name unique
  const fileName = unifyFileName(fileData.fileName);

  // make an URI for the file to create
  const fileUri = path.join('/api/files', fileData.type, fileName);
  // make a path where to create the file
  const filePath = path.join(__dirname, '../../files', fileData.type, fileName);

  await createFile(filePath, fileData.buffer);

  return { filePath, fileUri };
}
