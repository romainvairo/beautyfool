import { isObject, isString, forIn, pullAt } from 'lodash';

import { fieldsData } from '../data';
import { getValidations } from '.';

const createSetPropertyFromLang = (field, lang = 'en') => property => {
  if (isObject(field[property])) {
    if (!field[property][lang]) {
      throw new Error(`The property "${property}" of field "${field.name}" doesn't have a translation for language "${lang}"`);
    }
    field[property] = field[property][lang];
  }
}

const mapFields = (items, props) => {
  const fields = [];

  items.forEach((field, i) => {
    let currentField;

    if (isString(field)) {
      if (!fieldsData[field]) {
        throw new Error(`There is no field called "${field}"`);
      }

      currentField = fieldsData[field];
    } else if (isObject(field)) {
      currentField = field;
    } else {
      throw new Error(`fields must contain strings and/or objects. Got ${field} at index ${i}`);
    }

    if (currentField.validations) {
      currentField.validations = { ...getValidations(currentField, props.lang) };
    } else {
      currentField.validations = {};
    }

    fields.push(currentField);
  });

  return fields;
}

const transformFields = (items, validationsArr, fieldsState, props, source) => {
  items.forEach((item, i) => {
    if (item.type === 'group') {
      item.items.map(i => {
        i.name = `${item.name}.${i.name}`;
        return i;
      });

      transformFields(item.items, validationsArr, fieldsState, props, source);
      item.items.forEach(item => source.push(item));
      pullAt(source, i);
      return;
    }

    console.log(item.name, item.defaultValue)
    fieldsState[item.name] = item.defaultValue || '';

    const setPropertyFromLang = createSetPropertyFromLang(item, props.lang);
    setPropertyFromLang('label');
    setPropertyFromLang('placeholder');

    forIn(item.validations, validation => {
      validation.field = item.name;
      validationsArr.push(validation);
    });
  });
}

/**
 * get the fields from the value given in the props
 * @param {Object} props caller's props
 * @param {Array} validationsArr array of validations
 * @param {Object} fieldsState state of the fields
 * @param {String?} lang
 * @returns {Array}
 */
export const getFields = (props, validationsArr, fieldsState) => {
  const fields = mapFields(props.fields, props);

  console.log(fields)
  transformFields(fields, validationsArr, fieldsState, props, fields);
  console.log(fields)

  return fields;
}
