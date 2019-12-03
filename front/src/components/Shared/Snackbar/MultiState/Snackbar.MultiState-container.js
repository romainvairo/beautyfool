import React from 'react';
import { isEqual, isFunction } from 'lodash';

import Snackbar from '..';

class SnackbarMultiStateContainer extends React.PureComponent {

  timeout;

  state = {
    data: this.props.data,
  };

  componentDidUpdate(prevProps) {
    const { status, data } = this.props;

    if (status !== prevProps.status) {
      if(this.isValidStatus()) {
        this.getDataFromState();
      }
    }

    if (!isEqual(data, prevProps.data)) {
      this.setState({ data });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  /**
   * get data from `this.state` if `this.props.status` is a valid status
   */
  isValidStatus = () => {
    const { status } = this.props;

    switch (status) {
      case 'success':
      case 'error':
      case 'warning':
      case 'info':
        return true;
      default:
        break;
    }
  }

  /**
   * get data from `this.state`
   */
  getDataFromState = () => {
    let { data } = this.state;
    const { timeout, onClose, successCallback, status } = this.props;

    if(isFunction(data)){
      data = data();
    }

    if (data[status]) {
      data[status].variant = status;
      this.setState({ data: data[status] });
    }

    if (status === 'success') {
      this.timeout = setTimeout(() => {
        onClose();

        if (isFunction(successCallback)) {
          successCallback();
        }
      }, timeout);
    }
  }

  render() {
    const { timeout, data: _, ...props } = this.props;
    const { data } = this.state;

    return <Snackbar
      {...props}
      {...data}
    />;
  }
}

SnackbarMultiStateContainer.defaultProps = {
  timeout: 1500,
};

export default SnackbarMultiStateContainer;
