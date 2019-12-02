import React from 'react';
import classNames from 'classnames';

import ActionButton from '..';

const ActionButtonEdit = ({ className, children, ...props }) => (
  <ActionButton
    {...props}
    className={classNames('bg-gray-lighter-2', className)}
  >
    {children}
  </ActionButton>
);

ActionButtonEdit.defaultProps = {
  className: '',
};

export default ActionButtonEdit;
