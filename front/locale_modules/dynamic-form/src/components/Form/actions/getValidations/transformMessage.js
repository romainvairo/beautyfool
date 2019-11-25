import { isObject } from 'lodash';

export const transformMessage = (validation, lang, not) => {
  const messages = validation.message[lang];

  if (!messages) {
    throw new Error(`the validation "${validation}" doesn't have a message for the language "${lang}"`);
  }

  if (!isObject(messages)) {
    throw new Error(`The message for the validation "${validation}" of language "${lang}" must be an object`);
  }

  validation.message = messages[not ? 'not' : 'default'];
}
