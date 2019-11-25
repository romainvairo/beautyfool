/**
 * test the target's value and returns the result, if `condition.value` is undefined there is nothing to test
 * @param {Object} condition
 * @param {String} condition.target
 * @param {*} condition.value
 * @param {Object} state
 * @returns {Boolean}
 */
export const testValue = (condition, state) => {
  if (condition.value === undefined) {
    return true;
  }
  return state[condition.target] === condition.value;
}
