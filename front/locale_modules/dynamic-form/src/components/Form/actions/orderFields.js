import { sortBy, isFunction } from 'lodash';

const orderIteratee = (f, i) => f.order != null ? f.order : i;
const mapIteratee = (f, i) => {
  f.order = orderIteratee(f, i);
  return f;
}

export const orderFields = (fields, iteratee) => {
  let i = 0;

  if (!isFunction(iteratee)) {
    iteratee = orderIteratee;
  }

  return sortBy(fields.map(mapIteratee), f => iteratee(f, i++));
}
