import { addValidations } from 'dynamic-form';

// add form validations to the presets
addTransformations({
  required: {
    // `method` can be a string if it is a function available in the library "validator" <https://www.npmjs.com/package/validator>
    method: 'isEmpty',
    // make the validation valid if the method return false
    validWhen: false,
    message: {
      // language code (can have several languages)
      en: {
        // default message
        default: '{{label}} is required', // `{{label}}` will be replaced by the label of the field
        // message when the validation uses the 'not' operator (e.g. `!`)
        not: '{{label}} must be empty'
      }
    }
  },
  equals: {
    // `state` contains the value of all fields
    // `target` is the value of the targeted field
    // `options` is the arguments given in the validation
    method: state => (target, options) => state[options.field] === target,
    validWhen: true,
    // gives arguments to the validation method
    args: [{ field: '{{match}}' }], // `{{match}}` will be replaced by the name of the targeted field
    message: {
      en: {
        default: '{{label}} and {{match}} must match',
        not: '{{label}} and {{match}} must not match'
      }
    }
  }
});
