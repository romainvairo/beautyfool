import React from 'react';
import classNames from 'classnames';

const FormHelperView = ({ classes, text, ...props }) => (
  <span
    {...props}
    className={classNames(classes.formHelper, props.className)}
  >
    {text}
  </span>
);

export default FormHelperView;
