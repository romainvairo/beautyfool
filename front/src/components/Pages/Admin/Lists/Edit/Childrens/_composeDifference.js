import { differentiator } from '../../../../../../utils';

/**
 * @param {String[]} propList
 * @returns {(newData: Object, originalData: Object) => Object}
 */
export const composeDifference = propList => (newData, originalData) => {
  const mergedData = {...newData, ...originalData};
  const keys = [];

  for (let key in mergedData) {
    if (newData[key] !== originalData[key]) {
      keys.push(key);
    }
  }

  const result = {};

  for (let key in keys) {
    result[key] = newData[key];
  }

  return result;
}
