import React from 'react';
import FormValidator from 'form-validator';
import { isEqual } from 'lodash';

import Field from '../Field';
import FormView from './Form-view';
import {
  onChange,
  onSubmit,
  getFields,
  getEventHandlers,
  orderFields,
  renderPositionatedElement,
  stateVerifier,
  getValidations,
  objectValidationsToArray,
} from './actions';

class FormContainer extends React.PureComponent {

  baseValidations = [];
  addonValidations = [];
  submitted = false;
  defaultValidator = null;
  validator = null;
  fields = [];

  constructor(props) {
    super(props);

    if (!Array.isArray(props.fields)) {
      throw new Error(`fields must be an array. Got "${props.fields}"`);
    }

    const validationsArr = [];
    const fieldsState = {};

    this.fields = getFields(props, validationsArr, fieldsState);
    this.baseValidations = validationsArr;
    this.validator = this.defaultValidator = new FormValidator(validationsArr);

    this.state = {
      ...fieldsState,
      canUpdate: true,
      validation: this.validator.valid(),
    };
  }

  isValid = () => {
    return this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
  }

  // TODO externalize and refactor it
  changeValidator = () => {
    const { fieldsProps, classes } = this.props;

    const stateManager = stateVerifier(this.fields, this.state, this.baseValidations, fieldsProps, classes);
    const validationsObj = [];

    this.fields.forEach(field => {
      if (!field.state || !field.state.validations) {
        return;
      }

      if (!Array.isArray(field.state.validations)) {
        field.state.validations = [field.state.validations];
      }

      field.state.validations.forEach(validation => {
        if (stateManager('validations', validation.name)(field)) {
          validationsObj.push({
            ...field,
            validations: [validation],
          });
        }
      });
    });

    if (!validationsObj.length) {
      this.validator = new FormValidator([]);
      this.setState({
        validation: this.isValid()
      });
      return;
    }

    const validationsObj2 = {};

    validationsObj.forEach(validation => {
      validation.validations = validation.validations.map(v => v.validation);

      const validations = getValidations(validation);

      if (!Object.keys(validations).length) {
        return;
      }

      if (!validationsObj2[validation.name]) {
        validationsObj2[validation.name] = validation;
        validationsObj2[validation.name].validations = [];
      }

      validationsObj2[validation.name].validations.push(...Object.values(validations));
    });

    let validations = [];
    for (const key in validationsObj2) {
      validations = [...validations, ...objectValidationsToArray(validationsObj2[key])];
    }

    this.validator = new FormValidator([...this.baseValidations, ...validations]);
    this.setState({
      validation: this.isValid()
    });
  }

  render() {
    const { fieldsProps, classes } = this.props;

    const validation = this.isValid();

    return <FormView
      {...this.props}
      onSubmit={onSubmit(this)}
      fields={orderFields(this.fields)}
      validation={validation}
      state={this.state}
      onChange={onChange(this)}
      getEventHandlers={getEventHandlers(this)}
      renderPositionatedElement={renderPositionatedElement}
      changeValidator={this.changeValidator}
      stateVerifier={stateVerifier(this.fields, this.state, this.validator.validate(this.state), fieldsProps, classes)}
    />;
  }
}

FormContainer.defaultProps = {
  lang: 'en',
  SubmitButtonComponent: 'button',
  classes: {},
  submitText: 'Submit',
  InputComponent: Field,
  fieldsProps: {},
  formHelperProps: {},
  submitButtonProps: {},
  formProps: {},
};

export default FormContainer;
