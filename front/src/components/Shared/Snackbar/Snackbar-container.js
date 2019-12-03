import React from 'react';
import { isBoolean, isFunction } from 'lodash';
import { CircularProgress } from '@material-ui/core';

import SnackbarView from './Snackbar-view';
import SnackbarBase from './Base';
import SnackbarMultiState from './MultiState';

class SnackbarContainer extends React.PureComponent {

  // add accessor to `SnackbarBase`
  static Base = SnackbarBase;
  // add accessor to `SnackbarMultiState`
  static MultiState = SnackbarMultiState;

  /**
   * wrap `this.props.onClose` event handler
   * @param {Object} e
   * @param {String} reason
   */
  onClose = (e, reason) => {
    const { allowClickAway, onClose } = this.props;

    if (reason === 'clickaway' && !allowClickAway) {
      return;
    }

    onClose(e, reason);
  }

  /**
   * get the message for the snackbar
   * @returns {JSX.Element | String}
   */
  getMessage = () => {
    let { message, Loader } = this.props;

    if(isFunction(message)){
      message = message();
    }

    if (!Loader) {
      return message;
    }

    if (isBoolean(Loader)) {
      Loader = <CircularProgress size={20} color="secondary" />;
    } else if (isFunction(Loader)) {
      Loader = Loader();
    }

    return (
      <>
        {Loader}
        <span className="ml-3">{message}</span>
      </>
    );
  }

  render() {
    const { message, Loader, allowClickAway, onClose, ...props } = this.props;

    return <SnackbarView
      {...props}
      getMessage={this.getMessage}
      onClose={this.onClose}
    />;
  }
}

SnackbarContainer.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
};

export default SnackbarContainer;
