import React from 'react';
import classNames from 'classnames';
import { Button } from '@material-ui/core';

import ActionButtonEdit from './Edit';
import ActionButtonDelete from './Delete';

const ActionButton = ({ className, children, ...props }) => (
  <Button
    {...props}
    variant="contained"
    className={classNames(`py-1 px-3 font-bold`, className)}
  >
    {children}
  </Button>
);


ActionButton.defaultProps = {
  className: '',
};

ActionButton.Edit = ActionButtonEdit;
ActionButton.Delete = ActionButtonDelete;

export default ActionButton;
