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
    Error.captureStackTrace(this, BaseError);

    if (_.isObject(error)) {
      this.message = error.message;
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
}
