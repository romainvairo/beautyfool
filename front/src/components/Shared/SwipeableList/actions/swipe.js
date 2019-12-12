import { getFunction } from '../../../../utils'

/**
 * get the swipe left handler
 * @param {Object} param0
 * @param {Function} [param0.onSwipe]
 * @param {Function} [param0.onSwipeLeft]
 * @returns {Function}
 */
export function swipeLeft({ onSwipe, onSwipeLeft }) {
  return getFunction([onSwipeLeft, onSwipe]);
}

/**
 * get the swipe left handler
 * @param {Object} param0
 * @param {Function} [param0.onSwipe]
 * @param {Function} [param0.onSwipeRight]
 * @returns {Function}
 */
export function swipeRight ({ onSwipe, onSwipeRight }) {
  return getFunction([onSwipeRight, onSwipe]);
}
