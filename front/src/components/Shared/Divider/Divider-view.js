import React from 'react';
import classNames from 'classnames';

const Divider = ({ border, color, className }) => (
  <hr className={classNames(`Divider border-t-${border} border-${color}`, className)} />
);

Divider.defaultProps = {
  border: 2,
  color: 'gray-800',
};

export default Divider;
