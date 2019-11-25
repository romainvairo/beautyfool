import { testConditions } from './testConditions';

const defaultReturn = stateType => {
  switch (stateType) {
    case 'show':
      return true;
    case 'disabled':
      return false;
    case 'className':
      return false;

    default:
      return true;
  }
}

export const stateVerifier = (fields, state, validations, fieldsProps, classes) => (stateType, arg) => currentField => {
  if (!currentField.state) {
    return defaultReturn(stateType);
  }

  let conditions = currentField.state[stateType];

  if (!conditions) {
    return defaultReturn(stateType);
  }

  switch (stateType) {
    case 'className':
      conditions = conditions.find(c => c.value === arg).conditions;
      break;
    case 'validations':
      conditions = conditions.find(c => c.validation === arg || c.validation.name === arg).conditions;
      break;
    case 'transformations':
      conditions = conditions.find(c => c.transformation.name === arg).conditions;
      break;

    default:
      break;
  }

  return testConditions(fields, state, validations, fieldsProps, classes)(conditions, currentField);
}
