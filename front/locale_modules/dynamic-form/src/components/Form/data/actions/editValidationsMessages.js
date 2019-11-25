import { forIn, merge } from 'lodash';

import { validationsData } from '..';

/**
 * edit the default messages of the default validations
 * @param {Object} messages
 */
export const editValidationsMessages = messages => {
  forIn(messages, (validationMessages, validationName) => {
    merge(validationsData[validationName].message, validationMessages);
  });
}
