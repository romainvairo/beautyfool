import { isString, isObject, forIn } from 'lodash';

import { multipleReplace } from '.';

export const deepReplace = (element, pattern, replacements) => {

  if (isString(element) && pattern.test(element)) {
    element = multipleReplace(element, replacements);
  } else if (Array.isArray(element)) {
    element = element.map(e => deepReplace(e, pattern, replacements));
  } else if (isObject(element)) {
    forIn(element, (e, name) => {
      element[name] = deepReplace(e, pattern, replacements);
    });
  }

  return element;
}
