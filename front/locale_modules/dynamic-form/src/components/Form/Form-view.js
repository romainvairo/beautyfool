import React from 'react';
import classNames from 'classnames';

import Fields from './Fields';
import SubmitButton from './SubmitButton';
import FormHelper from './FormHelper';

const FormView = ({
  onSubmit,
  fields,
  state,
  onChange,
  validation,
  SubmitButtonComponent,
  submitText,
  classes,
  className,
  fieldsProps,
  errorMessage,
  formHelperProps,
  formProps,
  submitButtonProps,
  getEventHandlers,
  children,
  renderPositionatedElement,
  ...props
}) => (
  <form
    {...formProps}
    className={classNames(className, classes.form, formProps.className)}
    onSubmit={onSubmit}
  >

    {renderPositionatedElement('before', 'fields')(children)}
    <Fields
      {...props}
      fields={fields}
      renderPositionatedElement={renderPositionatedElement}
      getEventHandlers={getEventHandlers}
      state={state}
      validation={validation}
      onChange={onChange}
      classes={classes}
      fieldsProps={fieldsProps}
      children={children}
    />
    {renderPositionatedElement('after', 'fields')(children)}

    {renderPositionatedElement('before', 'submit-button')(children)}
    <SubmitButton
      {...submitButtonProps}
      component={SubmitButtonComponent}
      classes={classes}
      text={submitText}
    />
    {renderPositionatedElement('after', 'submit-button')(children)}

    {renderPositionatedElement('before', 'form-helper')(children)}
    <FormHelper
      {...formHelperProps}
      classes={classes}
      text={errorMessage}
    />
    {renderPositionatedElement('after', 'form-helper')(children)}
  </form>
);

export default FormView;
