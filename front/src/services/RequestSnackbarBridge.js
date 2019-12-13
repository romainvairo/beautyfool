import { isFunction, upperFirst } from 'lodash';

import { RequestSnackbar } from './RequestSnackbar';
import { overloadMethod, stringFormatter } from '../utils';

/**
 * @typedef {import('./MultiSnackbar').SnackbarText} SnackbarText
 */

export class RequestSnackbarBridge {

  /**
   * @type {React.PureComponent}
   */
  context;
  /**
   * @type {RequestSnackbar}
   */
  snackbar;
  /**
   * @type {(props: any) => JSX.Element}
   */
  Snackbar;

  /**
   * @param {React.PureComponent} thisArg
   */
  constructor(thisArg) {
    this.snackbar = new RequestSnackbar(thisArg);
    this.Snackbar = this.snackbar.Snackbar;
    this.context = thisArg;

    overloadMethod(thisArg, this, 'componentDidMount');
  }

  /**
   * this function will be called at the same time as the `componentDidMount`
   * from the caller's context
   */
  componentDidMount() {
    if (isFunction(this.init)) {
      this.init();
    }
  }

  /**
   * initializer of the snackbar
   * @returns {this}
   */
  init = () => {
    // @ts-ignore
    if (isFunction(this.setter)) {
      // @ts-ignore
      this.setter();
      this.autoHandle();
    }

    return this;
  }

  /**
   * call the request
   * @param {Array} args
   * @returns {this}
   */
  call = (...args) => {
    this.snackbar.call(...args);
    return this;
  }

  /**
   * call the request
   * @param {Array} args
   * @returns {this}
   */
  caller = (...args) => {
    this.call(...args);
    return this;
  }

  /**
   * set an handler automatically to the snackbar
   * @param {String} handlerName
   * @returns {this}
   */
  autoHandler = handlerName => {
    this.snackbar[handlerName]((...args) => {
      // if the targeted method is a function we execute it with all its arguments
      if (isFunction(this[handlerName])) {
        this[handlerName](...args);
      }
    });
    return this;
  }

  /**
   * automatically set the handler for the request
   * @returns {this}
   */
  autoHandle = () => {
    this
      .autoHandler('then')
      .autoHandler('catch')
      .autoHandler('finally');
    return this;
  }

  /**
   * set the text for the snackbar
   * @param {SnackbarText} text
   * @returns {this}
   */
  setText = text => {
    this.snackbar.setText(text);
    return this;
  }

  /**
   * set the request to call with the text associated to
   * @param {(...args) => Promise} callback
   * @returns {this}
   */
  setRequest = callback => {
    this.snackbar.setRequest(callback);
    return this;
  }

  /**
   * set the text based on the given `translations`
   * @param {Object} translations
   * @returns {this}
   */
  setTranslations = translations => {
    const { language } = this.context.props;

    this.snackbar.setText(translations[language]);
    return this;
  }

  /**
   * format a text with the `args`
   * @param {String} textType
   * @param {Array} args
   * @returns {this}
   */
  formatter = (textType, ...args) => {
    this.snackbar['edit' + upperFirst(textType)](stringFormatter(this.snackbar.originalText[textType], ...args));
    return this;
  }

  /**
   * format the start text with the `args`
   * @param {Array} args
   * @returns {this}
   */
  formatStart = (...args) => {
    this.formatter('start', ...args);
    return this;
  }

  /**
   * format the success text with the `args`
   * @param {Array} args
   * @returns {this}
   */
  formatSuccess = (...args) => {
    this.formatter('success', ...args);
    return this;
  }

  /**
   * format the error text with the `args`
   * @param {Array} args
   * @returns {this}
   */
  formatError = (...args) => {
    this.formatter('error', ...args);
    return this;
  }

  /**
   * format all the text with the `args`
   * @param {Array} args
   * @returns {this}
   */
  formatAll = (...args) => {
    this
      .formatStart(...args)
      .formatSuccess(...args)
      .formatError(...args);
    return this;
  }
}
