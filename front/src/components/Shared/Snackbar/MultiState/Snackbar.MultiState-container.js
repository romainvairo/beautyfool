import React from 'react';
import { isEqual, isFunction } from 'lodash';

import Snackbar from '..';

class SnackbarMultiStateContainer extends React.PureComponent {

  timeout;

  state = {
    data: this.props.data,
  };

  componentDidUpdate(prevProps, prevState) {
    const { status, data } = this.props;

    if (status !== prevProps.status) {
      this.getData();
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
  getData = () => {
    const { status } = this.props;

    switch (status) {
      case 'success':
      case 'error':
      case 'warning':
      case 'info':
        this.getDataFromState(status);
    }
  }

  /**
   * get data from `this.state`
   * @param {String} status
   */
  getDataFromState = status => {
    const { data } = this.state;
    const { timeout, onClose, successCallback } = this.props;

    if (data[status]) {
      data[status].variant = status;
      this.setState({ data: data[status] });
    }

    if (status === 'success') {
      this.timeout = setTimeout(() => {
        console.log('timeout')
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
