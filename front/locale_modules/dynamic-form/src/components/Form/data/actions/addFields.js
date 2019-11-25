import { merge } from 'lodash';

import { fieldsData } from '..';

/**
 * add fields to the default fields
 * @param {Object} fields
 */
export const addFields = fields => {
  merge(fieldsData, fields);
}
