import { isObject } from 'lodash';

import { orderElements } from '.';

const renderPositionatedObject = (position, type, children, i) => {
  return (
    (children.props[position] || children.props.position === position) &&
    children.props.type === type &&
    i === children.props.index
  ) && children;
}

const renderPositionatedArray = (position, type, children, i) => {
  return orderElements(children.filter(c => renderPositionatedElement(position, type)(c, i)));
}

export const renderPositionatedElement = (position, type) => (children, i) => {
  if (Array.isArray(children)) {
    return renderPositionatedArray(position, type, children, i);
  } else if (isObject(children)) {
    return renderPositionatedObject(position, type, children, i);
  }
}
