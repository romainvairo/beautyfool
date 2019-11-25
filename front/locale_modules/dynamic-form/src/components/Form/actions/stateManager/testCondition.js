import { testClassName, testIsValid, testValue } from './testConditionParts';

export const testCondition = (fields, state, validations, fieldsProps, classes) => (condition, currentField, arg) => {
  condition.validWhen = condition.validWhen == null ? true : condition.validWhen;

  if (!condition.target) {
    condition.target = currentField.name;
  }

  const field = fields.find(f => condition.target === f.name);

  if (!field) {
    throw new Error(`There is no field called "${condition.target}"`);
  }

  const classNameTest = testClassName(condition, field, fieldsProps, classes);
  const isValidTest = testIsValid(condition, validations);
  const valueTest = testValue(condition, state);

  return (classNameTest && isValidTest && valueTest) === condition.validWhen;
}
