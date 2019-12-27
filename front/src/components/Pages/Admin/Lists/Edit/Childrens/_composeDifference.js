import { differentiator } from '../../../../../../utils';

/**
 * @param {String[]} propList
 * @returns {(newData: Object, originalData: Object) => Object}
 */
export const composeDifference = propList => (newData, originalData) => {
  const differences = {};
  const getDifference = differentiator(differences, newData, originalData);

  propList.forEach(getDifference);

  return differences;
}
