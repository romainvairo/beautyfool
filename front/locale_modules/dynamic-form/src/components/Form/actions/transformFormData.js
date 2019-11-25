import { isString, isFunction } from 'lodash';
import { unflatten } from 'flat';

import { transformationsData } from '../data';

const transformFieldValue = (value, field) => {
  if (!Array.isArray(field.transformations)) {
    return value;
  }

  field.transformations.forEach(transformation => {
    if (isString(transformation)) {
      if (!transformationsData[transformation]) {
        throw new Error(`There is no transformation called "${transformation}"`);
      }
      value = transformationsData[transformation](value);
    } else if (isFunction(transformation)) {
      value = transformation(value);
    } else {
      throw new Error(`The transformations must be either a string or a functon. got "${transformation}"`);
    }
  });

  return value;
}

export const transformFormData = thisArg => {
  const formData = {};

  thisArg.fields.forEach(field => {
    const fieldValue = thisArg.state[field.name];
    formData[field.name] = transformFieldValue(fieldValue, field);
  });

  return unflatten(formData);
}
