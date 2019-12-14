/**
 * @typedef {import('react').PureComponent} PureComponent
 *
 * @param {PureComponent} thisArg
 * @returns {(name: String) => Function}
 */
export const toggle = thisArg => name => () => {
  thisArg.setState(state => ({ [name]: !state[name] }));
}
