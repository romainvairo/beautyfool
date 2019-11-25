import { forIn, cloneDeep } from 'lodash';

import { isNot } from './isNot';
import { reverseValidationExpectation } from './reverseValidationExpectation';
import { transformMessage } from './transformMessage';
import { deepReplace } from '../../../../utils';
import { validationsData } from '../../data';

export const getValidationString = (validation, field, lang, validationsObj) => {
  const splitRes = validation.name.split(':');
  validation.name = splitRes[0];
  validation.args = splitRes[1];

  const { not, validationName } = isNot(validation.name);
  validation.name = validationName;

  if (!validationsData[validation.name]) {
    throw new Error(`There is no validation for name "${validation.name}"`);
  }

  validationsObj[validation.name] = cloneDeep(validationsData[validation.name]);

  if (not) {
    reverseValidationExpectation(validationsObj[validation.name]);
  }

  const range = validation.args ? validation.args.split('-') : [];
  const match = validation.args ? validation.args.split('$')[1] : '';

  transformMessage(validationsObj[validation.name], lang, not);

  forIn(validationsObj[validation.name], (_, name) => {
    if (name !== 'message' && name !== 'args') {
      return;
    }

    validationsObj[validation.name][name] = deepReplace(
      validationsObj[validation.name][name],
      /\{\{.+\}\}/,
      {
        label: field.label,
        name: field.name,
        type: field.type,
        min: range[0],
        max: range[1],
        match: match,
      });
  });
}
