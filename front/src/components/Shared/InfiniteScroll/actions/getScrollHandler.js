import { getFunction } from '../../../../utils';

/**
 * get the scroll top handler
 * @param {Object} param0
 * @param {Function} [param0.onScroll]
 * @param {Function} [param0.onScrollTop]
 * @returns {Function}
 */
export const scrollTopHandler = ({ onScroll, onScrollTop }) => {
  return getFunction([onScrollTop, onScroll]);
}

/**
 * get the scroll bottom handler
 * @param {Object} param0
 * @param {Function} [param0.onScroll]
 * @param {Function} [param0.onScrollBottom]
 * @returns {Function}
 */
export const scrollBottomHandler = ({ onScroll, onScrollBottom }) => {
  return getFunction([onScrollBottom, onScroll]);
}
