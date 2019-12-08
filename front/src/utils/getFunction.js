import { isFunction } from 'lodash';

import { baseGetItem } from '.';

const blankFunction = () => {};

/**
 * get the first function from an array
 * return a blank function if there was no function and `toReturn` is set to `true`
 * or `toReturn` if it's a function
 * @param {Array} array
 * @param {Function | Boolean} [toReturn=true] default value is true
 * @returns {Function}
 */
export const getFunction = (array, toReturn = true) => {
  let defaultValue = null;

  defaultValue = toReturn === true
    ? blankFunction // get `blankFunction` if `toReturn` is true
    : isFunction(toReturn)
      ? toReturn // otherwise get `toReturn` if it's a function
      : defaultValue; // otherwise get its current value

  return baseGetItem(isFunction, defaultValue)(array);
}
