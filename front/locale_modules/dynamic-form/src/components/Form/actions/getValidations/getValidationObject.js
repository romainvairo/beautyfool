import { forIn, cloneDeep } from 'lodash';

import { isNot } from './isNot';
import { reverseValidationExpectation } from './reverseValidationExpectation';
import { transformMessage } from './transformMessage';
import { deepReplace } from '../../../../utils';

export const getValidationObject = (validation, field, lang, validationsObj) => {
  const isNotRes = isNot(validation.name);
  const not = isNotRes.not;
  validation.name = isNotRes.validationName;

  validationsObj[validation.name] = cloneDeep(validation);

  if (not) {
    reverseValidationExpectation(validationsObj[validation.name]);
  }

  transformMessage(validationsObj[validation.name], lang, not);

  forIn(validationsObj[validation.name], (_, name) => {
    if (name !== 'message') {
      return;
    }

    validationsObj[validation.name][name] = deepReplace(
      validationsObj[validation.name][name],
      /\{\{.+\}\}/,
      {
        label: field.label,
        name: field.name,
        type: field.type,
        /*min: range[0],
        max: range[1],
        match: match,*/
      });
  });
}
