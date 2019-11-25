import { cloneElement } from 'react';
import { sortBy, isFunction } from 'lodash';

const makeKey = ({ props }) => `${props.type}${props.index}${props.after}${props.order}${props.before}`;
const orderIteratee = (e, i) => e.props.order != null ? e.props.order : i;
const mapIteratee = (e, i) => cloneElement(e, { order: orderIteratee(e, i), key: makeKey(e) });

export const orderElements = (fields, iteratee) => {
  let i = 0;

  if (!isFunction(iteratee)) {
    iteratee = orderIteratee;
  }

  return sortBy(fields.map(mapIteratee), e => iteratee(e, i++));
}
