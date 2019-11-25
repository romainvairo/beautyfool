import React from 'react';
import classNames from 'classnames';

import Field from './Field';

const FieldsView = ({
  fields,
  getEventHandlers,
  renderPositionatedElement,
  state,
  onChange,
  validation,
  classes,
  fieldsProps,
  children,
  stateVerifier,
  ...props
}) => fields.map((field, i) => (
  <React.Fragment key={field.name}>
    {
      stateVerifier('show')(field) && (
        <Field
          {...props}
          {...field}
          {...getEventHandlers(field)}
          renderPositionatedElement={position => renderPositionatedElement(position, 'field')(children, i)}
          state={state}
          id={field.id || field.name}
          key={field.name}
          type={field.type || 'text'}
          value={state[field.name]}
          onChange={onChange(field)}
          validation={validation[field.name]}
          LocalComponent={field.Component}
          field={field}
          dynamicClassName={arg => stateVerifier('className', arg)(field)}
          stateManager={(type, arg) => stateVerifier(type, arg)(field)}
          classes={{
            input: classNames(classes.input, field.classes && field.classes.input),
            label: classNames(classes.label, field.classes && field.classes.label),
            helper: classNames(classes.helper, field.classes && field.classes.helper),
          }}
          className={classNames(fieldsProps.className, field.className)}
          labelProps={field.labelProps || {}}
          helperProps={field.helperProps || {}}
          disabled={field.disabled || stateVerifier('disabled')(field)}
        />
      )
    }
  </React.Fragment>
));

export default FieldsView;
