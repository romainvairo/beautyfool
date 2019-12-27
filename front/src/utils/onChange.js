/**
 * @typedef {(e: {target: { value: * }}) => void} ThirdFunction
 * @typedef {(name: String, propName?: String) => ThirdFunction} SecondFunction
 * onChange handler
 * @param {Object} thisArg
 * @param {Function} thisArg.setState
 * @param {String} setter
 * @returns {SecondFunction}
 */
export const onChange = (thisArg, setter = 'setState') => (name, propName = 'value') => e => {
  thisArg[setter]({ [name]: e.target[propName] });
}
