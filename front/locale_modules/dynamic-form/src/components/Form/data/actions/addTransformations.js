import { merge } from 'lodash';

import { transformationsData } from '..';

/**
 * add transformations to the default transformations
 * @param {Object} transformations
 */
export const addTransformations = transformations => {
  merge(transformationsData, transformations);
}
