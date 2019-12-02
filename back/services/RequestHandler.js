const { BaseError } = require('../Errors');
const { end } = require('../utils');

module.exports = class RequestHandler {

  res;
  errorCode;

  /**
   *
   * @param {Object} res express' `Response` object
   */
  constructor(res) {
    this.res = res;
  }

  /**
   * set a default error in case of error
   * @param {Object} errorCode
   */
  error(errorCode) {
    this.errorCode = errorCode;
    return this
  }

  /**
   * execute the code that will perform the requests to the DB
   * and automatically handle the success and error cases
   * @param {Function} callback
   */
  async then(callback) {
    let data;

    try {
      data = await callback();
    } catch (error) {
      console.log(error);
      error = BaseError.correctError(error, this.errorCode);

      return end(this.res, { error });
    }

    end(this.res, { data }, true);
  }

}
