/**
 * @typedef {(e: {target: { value: * }}) => void} ThirdFunction
 * @typedef {(name: String, propName?: String) => ThirdFunction} SecondFunction
 * onChange handler
 * @param {Object} thisArg
 * @param {Function} thisArg.setState
 * @returns {SecondFunction}
 */
export const onChange = thisArg => (name, propName = 'value') => e => {
  thisArg.setState({ [name]: e.target[propName] });
}
