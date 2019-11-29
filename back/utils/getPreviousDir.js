/**
 * get the previous directory of a path
 * @param {String} path
 * @returns {String}
 */
module.exports = function getPreviousDir(path) {
  // Replace '\\' by '/' in the path
  path = path.replace(/\\/g, '/');

  // splits the path into an array from '/'
  const pathArr = path.split('/');
  // take the last entry out
  pathArr.pop();

  // remake the path with the '/'
  return pathArr.join('/');
}
