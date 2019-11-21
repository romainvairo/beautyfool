import { editValidationsMessages } from 'dynamic-form';

// edit the validations messages of the presets
editValidationsMessages({
  // `required` is the name of the validation
  required: {
    fr: {
      default: '{{label}} est requis',
      not: '{{label}} doit être vide'
    }
  }
});
