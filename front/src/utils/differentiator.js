/**
 * put the differences into `differenceObject`
 * note: this function mutates `differenceObject`
 * @param {Object} differenceObject
 * @param {Object} newData
 * @param {Object} originalData
 * @returns {(propName: String) => void}
 */
export const differentiator = (differenceObject, newData, originalData) => propName => {
  if (newData[propName] !== originalData[propName]) {
    differenceObject[propName] = newData[propName];
  }
}
