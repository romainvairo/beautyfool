import React from 'react';
import classNames from 'classnames';
import { SnackbarContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './SnackbarBase.scss';

const SnackbarBaseView = ({ variant, Icon, className, onClose, message, ...props }) => (
  <SnackbarContent
    {...props}
    className={classNames('z-snackbar', variant, className)}
    aria-describedby="client-snackbar"
    message={
      <span id="client-snackbar" className="message">
        { Icon && <Icon className="icon icon-variant mr-2" /> }
        { message }
      </span>
    }
    action={[
      <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
        <CloseIcon />
      </IconButton>
    ]}
  />
);

export default SnackbarBaseView;
