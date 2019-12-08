import { getSafeInteger } from '../../../../utils';

/**
 * get the scroll top handler
 * @param {Object} param0
 * @param {Number} [param0.thresold]
 * @param {Number} [param0.topThresold]
 * @returns {Number}
 */
export const topThresold = ({ thresold, topThresold }) => {
  return getSafeInteger([topThresold, thresold]);
}

/**
 * get the scroll bottom handler
 * @param {Object} param0
 * @param {Number} [param0.thresold]
 * @param {Number} [param0.bottomThresold]
 * @returns {Number}
 */
export const bottomThresold = ({ thresold, bottomThresold }) => {
  return getSafeInteger([bottomThresold, thresold]);
}
