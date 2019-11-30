import React from 'react';
import MUISnackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import SnackbarBase from './Base';

const SnackbarView = ({
  anchorOrigin,
  open,
  autoHideDuration,
  onClose,
  variant,
  getMessage,
}) => (
  <MUISnackbar
    anchorOrigin={{...anchorOrigin}}
    open={open}
    TransitionComponent={Slide}
    autoHideDuration={autoHideDuration}
    onClose={onClose}
  >
    <SnackbarBase
      onClose={onClose}
      variant={variant}
      message={getMessage()}
    />
  </MUISnackbar>
);

export default SnackbarView;
