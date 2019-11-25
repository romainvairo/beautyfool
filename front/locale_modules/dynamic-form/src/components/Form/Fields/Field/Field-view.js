import React from 'react';

const FieldView = ({
  renderPositionatedElement,
  getFieldProps,
  getClasses,
  Field,
  getValidations,
  ...props
}) => (
  <>
    {renderPositionatedElement('before')}
      <Field
        {...getFieldProps(props)}
        classes={getClasses(props)}
      />
    {renderPositionatedElement('after')}
  </>
);

export default FieldView;
