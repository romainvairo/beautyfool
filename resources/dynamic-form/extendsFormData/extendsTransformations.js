import { addTransformations } from 'dynamic-form';

// add form transformations to the presets
addTransformations({
  deleteNumbers: value => value.replace(/[0-9]+/, ''),
});
