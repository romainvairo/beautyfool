import { forIn } from 'lodash';

export const multipleReplace = (string, replacements) => {
  forIn(replacements, (replacement, name) => {
    if (replacement != null) {
      string = string.replace(new RegExp(`\\{\\{${name}\\}\\}`, 'g'), replacement);
    }
  });

  return string;
}
