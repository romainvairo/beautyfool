import React from 'react';
import { isFunction } from 'lodash';

import { MultiSnackbar } from '..';
import ErrorElement from './ErrorElement';

/**
 * @typedef {import('../MultiSnackbar').SnackbarText} SnackbarText
 */

export class RequestSnackbar extends MultiSnackbar {

  /**
   * function that returns a `Promise`
   * @type {(...args) => Promise}
   */
  request;
  /**
   * @type {Function}
   */
  successHandler;
  /**
   * @type {Function}
   */
  errorHandler;
  /**
   * @type {Function}
   */
  finallyHandler;
  /**
   * @type {Object}
   */
  originalText = {};

  /**
   * set the request to call with the text associated to
   * @param {(...args) => Promise} callback
   * @returns {this}
   */
  setRequest = callback => {
    this.request = callback;
    this.withLoader = true;

    return this;
  }

  /**
   * set the text for the snackbar
   * @param {SnackbarText} text
   * @returns {this}
   */
  setText = text => {
    this.editText(text);
    return this;
  }

  /**
   * edit the start text
   * @param {String} text
   */
  editStart = text => {
    this.originalText.start = text;
    this.text.start = text;
  }

  /**
   * edit the success text
   * @param {String} text
   */
  editSuccess = text => {
    this.originalText.success = text;
    this.text.success = text;
  }

  /**
   * edit the error text
   * @param {String} text
   */
  editError = text => {
    this.originalText.error = text;
    this.text.error = <ErrorElement message={text} onClick={this.call} />;
  }

  /**
   * edit the text
   * @param {Object} text
   */
  editText = (text) => {
    if (text.start) {
      this.editStart(text.start);
    }

    if (text.success) {
      this.editSuccess(text.success);
    }

    if (text.error) {
      this.editError(text.error);
    }
  }

  /**
   * call the request
   * @param {Array} args
   * @returns {this}
   */
  call = (...args) => {
    // close snackbar
    this.close();

    // Tick === call function in the next Tick (update done)
    // @ts-ignore
    process.nextTick(() => {
      this
        .start(this.text.start, this.withLoader)
        .success(this.text.success)
        .error(this.text.error)
        .open();

      this.request(...args)
        .then(data => {
          this.status('success');
          this.successHandler(data, ...args);
        })
        .catch(error => {
          this.status('error');
          this.errorHandler(error, ...args);
        })
        // @ts-ignore
        .finally(() => {
          if (isFunction(this.finallyHandler)) {
            this.finallyHandler();
          }
        });
    });

    return this;
  }

  /**
   * set a function to call for the `then` of the request
   * @param {Function} callback
   * @returns {this}
   */
  then = callback => {
    this.successHandler = callback;
    return this;
  }

  /**
   * set a function to call for the `catch` of the request
   * @param {Function} callback
   * @returns {this}
   */
  catch = callback => {
    this.errorHandler = callback;
    return this;
  }

  /**
   * set a function to call for the `finally` of the request
   * @param {Function} callback
   * @returns {this}
   */
  finally = callback => {
    this.finallyHandler = callback;
    return this;
  }
}
