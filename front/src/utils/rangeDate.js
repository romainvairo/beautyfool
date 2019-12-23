import moment from 'moment';
import { minExpectedDate } from './minExpectedDate';

/**
 * @typedef {import('moment').Moment} Moment
 */

/**
 * @param {*} [min]
 * @param {*} [max]
 * @param {*} [interval]
 * @returns {Moment[]}
 */
export const rangeDate = (min = { hour: 9 }, max = { hour: 19 }, interval = { minute: 30 }) => {
  min = minExpectedDate(min);
  max = minExpectedDate(max);
  interval = minExpectedDate(interval);

  console.log(
    min.format('LL H[h]mm'), '\n',
    max.format('LL H[h]mm'), '\n',
    interval.format('LL H[h]mm')
  );

  const dates = [];
  const maxMilli = +max;
  const intervalMilli = +interval;
  const minMilli = +min;

  let i = 0;
  console.log(minMilli, maxMilli, intervalMilli)

  /*for (let milli = minMilli; milli <= maxMilli; milli += intervalMilli) {
    if (i++ > 1000) {
      throw new Error('infinite loop');
    }

    console.log(i, '\n', milli, maxMilli, intervalMilli)

    dates.push(moment(milli));
  }*/

  return dates;
}
