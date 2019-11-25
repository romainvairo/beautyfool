const rArrayIndex = /\[([0-9])\]$/;

/**
 * remove all useless spaces within an array of strings
 * @param {String[]} array
 * @returns {String[]}
 */
export const removeSpaces = array => {
  return array.map(str => str.trim()).filter(str => str);
}

/**
 * get an array indexing value
 * @param {String} string
 * @returns {String[]}
 */
export const getArrayIndexing = string => {
  // do a replace and split to return both the indexing value and the rest of the string
  return string.replace(rArrayIndex, '__$1').split('__');
}

/**
 * separate the last `path` accessor from the rest of the path
 * @param {String} path
 * @returns {Object}
 */
export const separateLastAccessorFromPath = path => {
  const index = getArrayIndexing(path);
  let fullPath;
  let lastPath;

  // if `index.length` is greater than 1 it means there's an array indexing
  if (index.length > 1) {
    lastPath = Number(index.pop());
    fullPath = index[0];
  } else {
    // get the last accessor from the path
    const split = path.split('.');
    lastPath = split.pop();
    fullPath = split.join('.');
  }

  return {
    path: fullPath,
    lastPath: lastPath,
  };
}
