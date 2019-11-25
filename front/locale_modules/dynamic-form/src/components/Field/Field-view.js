import React from 'react';
import classNames from 'classnames';

const FieldView = ({
  id,
  label,
  labelProps,
  helperMessage,
  classes,
  className,
  validation,
  helperProps,
  ...inputProps
}) => (
  <>
    <label
      {...labelProps}
      className={classNames(classes.label, labelProps.className)}
      htmlFor={id}
    >
        {label}
    </label>
    <input
      {...inputProps}
      className={classNames(classes.input, className)}
      id={id}
    />
    <span
      {...helperProps}
      className={classNames(classes.helper, helperProps.className)}
    >
      {(validation && validation.message) || helperMessage}
    </span>
  </>
);

export default FieldView;
