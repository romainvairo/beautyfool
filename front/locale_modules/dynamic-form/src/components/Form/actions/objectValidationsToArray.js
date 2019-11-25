import { forIn } from 'lodash';

export const objectValidationsToArray = field => {
  const validations = [];

  forIn(field.validations, validation => {
    validation.field = field.name;
    validations.push(validation);
  });

  return validations;
}
