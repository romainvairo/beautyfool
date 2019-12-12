import { isFunction } from 'lodash';

const blankFunction = () => {};

/**
 * overload the method of an object with a method from another object
 * @param {Object} targetThis object having the method to overload
 * @param {Object} currentThis object having the method to overload the target with
 * @param {String} methodName name of the method of both objects
 */
export const overloadMethod = (targetThis, currentThis, methodName) => {
  /**
   * @type {Function}
   */
  const targetMethod = isFunction(targetThis[methodName])
    ? targetThis[methodName]
    : blankFunction;

  targetThis[methodName] = () => {
    currentThis[methodName].call(currentThis);
    targetMethod.call(targetThis);
  }
}
