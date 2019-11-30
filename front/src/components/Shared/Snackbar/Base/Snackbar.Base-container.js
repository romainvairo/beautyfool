import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

import SnackbarBaseView from './Snackbar.Base-view';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

/**
 * Material-ui's Snackbar component needs a class as children
 * since we use this component as children for MUI's Snackbar component
 * we need it to be a class even if it could be a simple function
 */
class SnackbarBaseContainer extends React.PureComponent {

  render() {
    const { variant, ...props } = this.props;
    const Icon = variantIcon[variant];

    return <SnackbarBaseView {...props} Icon={Icon} variant={variant} />;
  }
}

export default SnackbarBaseContainer;
