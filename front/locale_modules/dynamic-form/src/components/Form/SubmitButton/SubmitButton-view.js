import React from 'react';
import classNames from 'classnames';

const SubmitButtonView = ({
  component: SubmitButton,
  classes,
  text,
  ...props
}) => (
  <SubmitButton
    {...props}
    className={classNames(classes.submitButton, props.className)}
    type="submit"
  >
    {text}
  </SubmitButton>
);

export default SubmitButtonView;
