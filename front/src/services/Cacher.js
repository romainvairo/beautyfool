import { isEqual, cloneDeep } from 'lodash';

export class Cacher {

  /**
   * @type {*}
   */
  value;
  /**
   * @type {*}
   */
  conditionalValues = {};
  /**
   * @type {Function}
   */
  calculateValue;

  /**
   * @param {*} conditionalValues
   */
  constructor(conditionalValues) {
    this.conditionalValues = cloneDeep(conditionalValues);
  }

  /**
   * get the value if it has been cached and the conditional values are the same
   * otherwise the value will be recalculated and cached
   * @param {*} newConditionalValues
   * @returns {*}
   */
  getValue(newConditionalValues) {
    let value = this.value;

    if (value == null || !isEqual(this.conditionalValues, newConditionalValues)) {
      this.value = value = this.calculateValue(newConditionalValues);
    }

    this.conditionalValues = cloneDeep(newConditionalValues);

    return value;
  }

  /**
   * set the method that will calculate the value
   * @param {Function} callback
   * @returns {this}
   */
  setCalculateValue(callback) {
    this.calculateValue = callback;
    return this;
  }
}
