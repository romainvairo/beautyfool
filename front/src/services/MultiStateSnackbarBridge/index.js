import React from 'react';
import { isFunction, cloneDeep } from 'lodash';

import Snackbar from '../../components/Shared/Snackbar';
import {
  defaultSnackbar,
  createSetSnackbar,
  initSetSnackbar,
  createSetStatus,
  createSetSuccessCallback,
  open,
  close,
} from './actions';

/**
 * @typedef {import('./actions').SnackbarSetter} SnackbarSetter
 */

export class MultiStateSnackbarBridge {

  // we don't want to get a reference to the `snackbar`
  snackbarState = cloneDeep(defaultSnackbar);
  // list of the timeouts to clear before the component unmounts
  timeouts = [];
  /**
   * @type {SnackbarSetter}
   */
  // @ts-ignore
  success;
  /**
   * @type {SnackbarSetter}
   */
  warning;
  /**
   * @type {SnackbarSetter}
   */
  info;
  /**
   * @type {SnackbarSetter}
   */
  error;
  /**
   * @type {SnackbarSetter}
   */
  start;
  status = createSetStatus(this);

  successCallback = createSetSuccessCallback(this);

  constructor(thisArg) {
    // the second parameter is used to update the component
    this.setSnackbar = createSetSnackbar(this, thisArg);;

    // add custom function to `this.setSnackbar` to simplify the change of the snackbar's state
    initSetSnackbar(this);

    // get `componentWillUnmount` of the caller if it exists and is a function
    const callerUnmount = isFunction(thisArg.componentWillUnmount)
      ? thisArg.componentWillUnmount
      : () => { };

    // replace the caller's `componentWillUnmount` with another function
    // that will call its `componentWillUnmount` with the one of the current instance
    thisArg.componentWillUnmount = () => {
      // call and give it its context so that it keeps its context
      callerUnmount.call(thisArg);
      this.componentWillUnmount();
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach(clearTimeout);
  }

  open = open(this);
  close = close(this);

  Snackbar = props => <Snackbar.MultiState
    {...props}
    {...this.snackbarState}
    onClose={this.close}
  />;
}
