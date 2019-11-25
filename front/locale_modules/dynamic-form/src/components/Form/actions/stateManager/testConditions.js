import { isObject } from 'lodash';

import { testCondition } from './testCondition';

export const testConditions = (fields, state, validations, fieldsProps, classes) => (conditions, currentField) => {
  let result = true;

  if (Array.isArray(conditions)) {
    conditions.forEach(condition => {
      result = result && testConditions(fields, state, validations, fieldsProps, classes)(condition, currentField);
    });
  } else if(isObject(conditions)) {
    result = testCondition(fields, state, validations, fieldsProps, classes)(conditions, currentField);
  } else {
    throw new Error(`The state conditions must be an object or array of objects. Got "${conditions}"`);
  }

  return result;
}
