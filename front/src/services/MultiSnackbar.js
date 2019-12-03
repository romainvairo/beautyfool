import { MultiStateSnackbarBridge } from '.';
import { stringFormatter } from '../utils';

/**
 *
 * @typedef {{ success: String | JSX.Element, error: String | JSX.Element, start: String | JSX.Element }} SnackbarText
 */

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
   * @param {SnackbarText} text
   * @returns {this}
   */
  new = (text, loader = true) => {
    this
      .setText(text)
      // @ts-ignore
      .start(stringFormatter(text.start, ...this.startArguments), this.withLoader = loader)
      // @ts-ignore
      .success(stringFormatter(text.success, ...this.successArguments))
      // @ts-ignore
      .error(stringFormatter(text.error, ...this.errorArguments))
      .open();
    return this;
  }

  /**
   * set the text for the snackbar
   * @param {SnackbarText} text
   * @returns {this}
   */
  setText = text => {
    this.text = text;
    return this;
  }

  /**
   * @param {Array} args
   * @returns {this}
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
   * @returns {this}
   */
  successArgs = (...args) => {
    this.successArguments = args;
    return this;
  }

  /**
   * @param {Array} args
   * @returns {this}
   */
  errorArgs = (...args) => {
    this.errorArguments = args;
    return this;
  }
}
