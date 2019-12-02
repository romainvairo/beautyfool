import { MultiStateSnackbarBridge } from '.';
import { stringFormatter } from '../utils';

export class MultiSnackbar extends MultiStateSnackbarBridge {

  /**
   * @type {Array}
   */
  startArguments = [];
  /**
   * @type {Array}
   */
  successArguments = [];
  /**
   * @type {Array}
   */
  errorArguments = [];
  /**
   * @type {Boolean}
   */
  withLoader;
  /**
   * @type {Object}
   */
  text = {};

  /**
   * create a new multi state snackbar
   * @param {Object} text
   * @param {String} text.start
   * @param {String} text.success
   * @param {String} text.error
   * @returns {MultiSnackbar}
   */
  new = (text, loader = true) => {
    this.text = text;
    this
      .start(stringFormatter(text.start, ...this.startArguments), this.withLoader = loader)
      .success(stringFormatter(text.success, ...this.successArguments))
      .error(stringFormatter(text.error, ...this.errorArguments))
      .open();
    return this;
  }

  /**
   * @param {Array} args
   * @returns {MultiSnackbar}
   */
  startArgs = (...args) => {
    this.startArguments = args;
    this.setSnackbar({
      overData: {
        'message': stringFormatter(this.text.start || '', ...args)
      }
    });
    this.start(stringFormatter(this.text.start || '', ...args), this.withLoader);
    return this;
  }

  /**
   * @param {Array} args
   * @returns {MultiSnackbar}
   */
  successArgs = (...args) => {
    this.successArguments = args;
    return this;
  }

  /**
   * @param {Array} args
   * @returns {MultiSnackbar}
   */
  errorArgs = (...args) => {
    this.errorArguments = args;
    return this;
  }
}
