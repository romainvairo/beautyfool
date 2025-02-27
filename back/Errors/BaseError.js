const _ = require('lodash');

module.exports = class BaseError extends Error {
  /**
   * @param {String | Object} error
   * @param {Number=} code
   */
  constructor(error, code) {
    super(error);

    // set the prototype to allow this object and its childrens to implements custom methods
    Object.setPrototypeOf(this, BaseError.prototype);
    // capture the stack trace without having this class to be in it
    // @ts-ignore
    Error.captureStackTrace(this, BaseError);

    if (_.isObject(error)) {
      // @ts-ignore
      this.message = error.message;
      // @ts-ignore
      this.code = error.code;
    } else {
      this.code = code;
    }
  }

  /**
   * @param {Number} code
   * @returns {BaseError}
   */
  setCode(code) {
    this.code = code;
    return this;
  }

  /**
   * get if the given data is a BaseError
   * @static
   * @param {*} data
   * @returns {Boolean}
   */
  static isBaseError(data) {
    return data.constructor.name === 'BaseError';
  }

  /**
   * get the correct error.
   * return `error` if it's a `BaseError` otherwise it will
   * create a `BaseError` with `defaultError`
   * @param {*} error
   * @param {*} defaultError
   * @returns {BaseError}
   */
  static correctError(error, defaultError) {
    return BaseError.isBaseError(error)
      ? new BaseError(defaultError)
      : error;
  }
}
