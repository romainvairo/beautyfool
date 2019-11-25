import { forIn, isObject, isString } from 'lodash';

import { getValidationObject } from './getValidationObject';
import { getValidationString } from './getValidationString';

const getValidationsObject = (field, lang, validationsObj) => {
  forIn(field.validations, (validation, validationName) => {
    if (isString(validation)) {
      getValidationString({ name: validation }, field, lang, validationsObj);
    } else if (isObject(validation)) {
      getValidationObject({
        ...validation, name: validationName,
      }, field, lang, validationsObj);
    }
  });
}

const getValidationsArray = (field, lang, validationsObj) => {
  field.validations.forEach(validation => {
    if (isString(validation)) {
      getValidationString({ name: validation }, field, lang, validationsObj);
    } else if (isObject(validation)) {
      getValidationObject(validation, field, lang, validationsObj);
    }
  });
}

/**
 * get the validations from a field
 * @param {Object} field
 * @param {String} lang
 * @returns {Object}
 */
export const getValidations = (field, lang = 'en') => {
  const validationsObj = {};

  if (Array.isArray(field.validations)) {
    getValidationsArray(field, lang, validationsObj);
  } else if (isObject(field.validations)) {
    getValidationsObject(field, lang, validationsObj);
  } else {
    throw new Error(`validations for the fields must be an array or an object. the field "${field.name}" got "${field.validations}"`);
  }

  return validationsObj;
}
