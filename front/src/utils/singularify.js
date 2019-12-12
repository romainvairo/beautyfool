/**
 * make a word singular
 * @param {String} string
 * @returns {String}
 */
export const singularify = string => {
  if (/s$/.test(string)) {
    string = string.substring(0, string.length - 1);
  }

  if (/ie$/.test(string)) {
    string = string.replace(/ie$/, 'y');
  }

  return string;
}
