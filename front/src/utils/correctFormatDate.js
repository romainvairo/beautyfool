import moment from 'moment';

/**
 *
 * @param {Date | String | Number} date
 * @returns {String}
 */
export const correctFormatDate = date => {
  if (!date) {
    return '0 minutes';
  }

  let result = '';

  const d = moment(date);
  // `new Date(0)` start at 1 am and not at 12 am
  const hours = d.hours() - 1;
  const minutes = d.minutes();

  if (hours > 0) {
    result += hours + ' heures ';
  }

  if (minutes > 0) {
    result += minutes + ' minutes ';
  }

  return result;
}
