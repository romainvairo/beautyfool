import classNames from 'classnames';
import { forIn, isString } from 'lodash';

const getClassesEach = (classes, field, dynamicClassName) => className => {
  forIn(classes, (classe, name) => {
    if (className.element || className.elements) {
      if (className.element) {
        if (!isString(className.element)) {
          throw new Error(`"element" on the className 'state' of field "${field.name}" must be a string. Got "${className.element}"`);
        } else if (className.element !== name) {
          return;
        }
      } else if (className.elements) {
        if (!Array.isArray(className.elements)) {
          throw new Error(`"elements" on the className 'state' of field "${field.name}" must be a string. Got "${className.elements}"`);
        } else if (!className.elements.includes(name)) {
          return;
        }
      } else {
        console.warn(new Error(`An element must be specified on the className 'state' of field "${field.name}"`));
      }
    } else {
      throw new Error(`At least one element must be specified on the 'state' className of field "${field.name}"`);
    }

    classes[name] = classNames(classe, { [className.value]: dynamicClassName(className.value) });
  });
}

export const getClasses = props => {
  const { classes, field, dynamicClassName } = props;

  if (!field.state || !field.state.className) {
    return classes;
  }

  if (!Array.isArray(field.state.className)) {
    field.state.className = [field.state.className];
  }

  field.state.className.forEach(getClassesEach(classes, field, dynamicClassName));

  return classes;
}
