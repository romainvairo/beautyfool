import { isFunction } from 'lodash';

import { transformFormData } from '.';

/**
 * handler for onSubmit events
 * @param {Object} thisArg caller's context
 * @returns {Function}
 */
export const onSubmit = thisArg => e => {
  e.preventDefault();
  const { onSubmit } = thisArg.props;

  if (!isFunction(onSubmit)) {
    throw new Error('"onSubmit" must be a function');
  }

  const validation = thisArg.validator.validate(thisArg.state);
  thisArg.submitted = true;
  thisArg.setState({ validation });

  if (validation.isValid) {
    onSubmit(transformFormData(thisArg), e);
  }
}
