const getValidationsEach = (validations, stateManager) => validation => {
  if (stateManager('validations', validation.name)) {
    validations.push(validation.validation);
  }
}

export const getValidations = props => {
  const { field, stateManager, changeValidator } = props;

  if (!field.state || !field.state.validations) {
    return;
  }

  const validations = [];

  if (!Array.isArray(field.state.validations)) {
    field.state.validations = [field.state.validations];
  }

  field.state.validations.forEach(getValidationsEach(validations, stateManager));

  if (validations.length) {

    changeValidator({
      ...field,
      validations: validations,
    });
  }
}
