/**
 * create an array with for values from the `min` to the `max`
 * @param {Number} min
 * @param {Number} max
 * @returns {Number[]}
 */
export const range = (min, max) => {
  const array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  return array;
}
