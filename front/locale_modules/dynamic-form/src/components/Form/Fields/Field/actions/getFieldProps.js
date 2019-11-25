import { forIn, upperFirst, camelCase } from 'lodash';

import { inputTypes } from '../inputTypes';

const excludes = inputTypes.map(t => upperFirst(camelCase(t)) + 'Component');
excludes.push('InputComponent');
excludes.push('LocalComponent');
excludes.push('Components');
excludes.push('preventGlobal');
excludes.push('validations');
excludes.push('lang');
excludes.push('order');
excludes.push('state');
excludes.push('dynamicClassName');
excludes.push('field');
excludes.push('changeValidator');
excludes.push('stateManager');

export const getFieldProps = props => {
  const fieldProps = {};

  forIn(props, (prop, name) => {
    if (excludes.includes(name)) {
      return;
    }

    fieldProps[name] = prop;
  });

  return fieldProps;
}
