import { getSafeInteger } from '../../../../utils';

/**
 * get the correct top page value
 * @param {Object} param0
 * @param {Number} [param0.page]
 * @param {Number} [param0.topPage]
 * @returns {Number}
 */
export const getTopPage = ({ page, topPage }) => {
  return getSafeInteger([topPage, page - 1]);
}

/**
 * get the correct bottom page value
 * @param {Object} param0
 * @param {Number} [param0.page]
 * @param {Number} [param0.bottomPage]
 * @returns {Number}
 */
export const getBottomPage = ({ page, bottomPage }) => {
  return getSafeInteger([bottomPage, page + 1]);
}
