import { MultiStateSnackbarBridge } from '.';

export class MultiSnackbar extends MultiStateSnackbarBridge {

  /**
   * create a new multi state snackbar
   * @param {Object} text
   * @param {String} text.start
   * @param {String} text.success
   * @param {String} text.error
   * @returns {MultiSnackbar}
   */
  new = text => {
    this.start(text.start).success(text.success).error(text.error).open();
    return this;
  }
}
