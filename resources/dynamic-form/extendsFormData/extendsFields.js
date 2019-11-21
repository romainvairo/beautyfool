import { addFields } from 'dynamic-form';

// add form fields to the presets
addFields({
  // add a field called "username"
  username: {
    name: 'username',
    // `label` can be a simple string if there is only 1 language supported
    // otherwise you would want to use an object to supported multiple languages
    label: {
      en: 'Username',
      fr: 'Nom d\'utilisateur'
    },
    // if the validations are in the presets
    // they can be a simple string
    validations: [
      'required',
      // the value after ':' are the validation arguments
      // if it is 2 numbers seperated by a dash it's range
      'length:3-40',
    ],
    // the transformations are performed when the form is submitted and valid
    // to transform the value of the fields
    transformations: ['trim']
  }
});
