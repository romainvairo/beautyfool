/**
 * return the first item from `array` that passes the `validator`
 * @param {Function} validator
 * @param {*} [defaultValue=null]
 * @returns {(array: Array) => *}
 */
export const baseGetItem = (validator, defaultValue = null) => array => {
  for (let i = 0; i < array.length; i++) {
    if (validator(array[i])) {
      return array[i];
    }
  }

  return defaultValue;
}
