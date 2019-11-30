import React from 'react';
import classNames from 'classnames';

import ActionButton from '..';

const ActionButtonDelete = ({ className, children, ...props }) => (
  <ActionButton
    {...props}
    className={classNames('bg-red-600 hover:bg-red-700 text-white', className)}
  >
    {children}
  </ActionButton>
);

ActionButtonDelete.defaultProps = {
  className: '',
};

export default ActionButtonDelete;
