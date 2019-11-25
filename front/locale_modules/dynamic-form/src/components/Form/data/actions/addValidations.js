import { merge } from 'lodash';

import { validationsData } from '..';

/**
 * add validations to the default validations
 * @param {Object} validations
 */
export const addValidations = validations => {
  merge(validationsData, validations);
}
