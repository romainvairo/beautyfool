import { isBoolean } from 'lodash';

export const testIsValid = (condition, validations) => {
  if (!validations[condition.target]) {
    return true;
  }

  if (isBoolean(condition.isValid)) {
    return validations[condition.target].isInvalid !== condition.isValid;
  }
  return true;
}
