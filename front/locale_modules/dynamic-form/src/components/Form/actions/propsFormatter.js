import classNames from 'classnames';

export const propsFormatter = ({
  // blank props
  fields,
  onChange,
  children,
  onSubmit,
  SubmitButtonComponent,
  submitText,
  classes,
  className,
  fieldProps,
  errorMessage,
  formHelperProps,
  formProps,
  submitButtonProps,
  getEventHandlers,
  renderPositionatedElement,
  ...props
}) => ({
  formProps: {
    ...formProps,
    className: classNames(className, classes.form, formProps.className),
    onSubmit: onSubmit,
  },

  fieldsProps: {
    ...props,
    ...fieldProps,
  },

  submitButtonProps: {
    ...submitButtonProps,
    className: classNames(classes.submitButton, submitButtonProps.className),
  },

  formHelperProps: {
    ...formHelperProps,
    className: classNames(classes.formHelper, formHelperProps.className),
  },
});
