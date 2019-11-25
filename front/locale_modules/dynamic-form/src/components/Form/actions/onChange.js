import { isFunction, isEqual } from 'lodash';
import FormValidator from 'form-validator';

import { overrideValue, preventHandler } from '../../../utils';

/**
 * handler for onChange events
 * @param {Object} thisArg caller's context
 * @returns {Function}
 */
export const onChange = thisArg => field => (e, value) => {
  e.preventDefault();
  const { onChange } = thisArg.props;

  value = value || e.target.value;

  const fieldState = {
    value: value,
    name: field.name,
  };

  const previousFieldState = {
    value: thisArg.state[field.name],
    name: field.name,
  };

  if (isFunction(onChange) && !preventHandler(field, 'onChange')) {
    value = overrideValue(value, onChange(fieldState, previousFieldState, e));
  }

  if (isFunction(field.onChange)) {
    value = overrideValue(value, field.onChange(fieldState, previousFieldState, e));
  }

  thisArg.setState({ [field.name]: value });

  process.nextTick(() => {
    thisArg.changeValidator();
    if (isEqual(thisArg.validator, thisArg.defaultValidator)) {
      thisArg.validator = thisArg.defaultValidator;
    }
  });
}
