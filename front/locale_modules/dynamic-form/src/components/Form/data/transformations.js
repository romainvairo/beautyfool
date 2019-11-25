import { upperFirst, lowerFirst } from 'lodash';

export const transformationsData = {
  trim: val => val.trim(),
  upperCase: val => val.toUpperCase(),
  lowerCase: val => val.toLowerCase(),
  upperFirst: val => upperFirst(val),
  lowerFirst: val => lowerFirst(val),
};
