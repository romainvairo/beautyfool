import { camelCase, upperFirst, isFunction } from 'lodash';

import { inputTypes } from '../inputTypes';

export const getComponentsInContainer = (props, suffix = '') => {
  const componentsContainer = {};

  const containedComponents = props.Components || {};

  inputTypes.forEach(type => {
    const pascalCaseType = upperFirst(camelCase(type));
    const typeComponent = pascalCaseType + suffix;
    const component = props[typeComponent];
    const containedComponent = containedComponents[type];

    if (component) {
      if (!isFunction(component)) {
        console.warn(new Error(`The component "${typeComponent}" is defined but isn't a function or a class. Got "${component}"`));
      } else {
        componentsContainer[pascalCaseType] = component;
      }
    } else if (containedComponent) {
      if (!isFunction(containedComponent)) {
        console.warn(new Error(`The component "Components.${type}" is defined but isn't a function or a class. Got "${containedComponent}"`));
      } else {
        componentsContainer[pascalCaseType] = containedComponent;
      }
    }
  });

  return componentsContainer;
}
