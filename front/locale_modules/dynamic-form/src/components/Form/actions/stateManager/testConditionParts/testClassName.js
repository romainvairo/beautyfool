import { isString, isObject } from 'lodash';
import classNames from 'classnames';

const getClassNames = (condition, field, classes) => {
  let classnames = '';

  condition.className.elements.forEach(element => {
    classnames = classNames(
      classnames,
      classes[element],
      field.classes && field.classes[element]
    );
  });

  return classnames;
}

/**
 *
 * @param {Object} condition
 * @param {String?} condition.className
 * @param {Object} field
 * @param {Object?} field.classes
 * @param {String?} field.className
 * @param {Object} fieldsProps
 * @param {String?} fieldsProps.className
 * @param {Object} classes
 */
export const testClassName = (condition, field, fieldsProps, classes) => {
  if (!isObject(condition.className)) {
    condition.className = {
      value: condition.className,
      elements: ['input', 'label', 'helper'],
    };
  }

  const { value } = condition.className;

  if (!condition.className.elements) {
    throw new Error(`You must specify the elements where to find the className "${value}"`);
  }

  const className = classNames(
    field.className,
    fieldsProps.className,
    getClassNames(condition, field, classes)
  );

  if (isString(value)) {
    if (isString(className)) {
      const rClassName = new RegExp('^' + value + '\\s|\\s' + value + '\\s|\\s' + value + '$|^' + value + '$');
      return rClassName.test(className);
    }
    return false;
  }

  return true;
}
