import moment from 'moment';

import { range } from '../../../utils';

/**
 * @typedef {import('moment').Moment} Moment
 */

export class IsTimeOccupied {

  /**
   * @type {Object[]}
   */
  appointments;
  /**
   * @type {Moment}
   */
  date;
  /**
   * @type {Number}
   */
  day;
  /**
   * @type {Number}
   */
  hour;

  /**
   * @param {Object[]} appointments
   */
  constructor(appointments) {
    this.appointments = appointments;
  }

  /**
   * @param {Moment} date
   * @returns {this}
   */
  setDate = date => {
    this.date = date;
    return this;
  }

  /**
   * @param {Number} day
   * @returns {this}
   */
  setDay = day => {
    this.day = day;
    return this;
  }

  /**
   * @param {Number} hour
   * @returns {this}
   */
  setHour = hour => {
    this.hour = hour;
    return this;
  }

  /**
   * @param {Boolean} [withDefaults]
   * @returns {Boolean}
   */
  results = withDefaults => {
    if (!this.appointments) {
      throw new Error('The appointments must be defined');
    }

    if (!this.date) {
      throw new Error('The date must be defined');
    }

    if (!this.day) {
      throw new Error('The day must be defined');
    }

    if (!this.hour) {
      throw new Error('The hour must be defined');
    }

    return !!this.appointments.find(a => {
      // create the hour where we will recover both the hour and the minutes
      const mHour = moment({ hour: 8, minute: 30 });
      // add 30 minutes for each hour interval
      range(1, this.hour).forEach(() => mHour.add({ minute: 30 }));

      // create the date of the current case based on the day (x axis) and the hour/minutes (y axis)
      const dateToTest = moment({ year: this.date.year(), month: this.date.month(), day: this.day, hour: mHour.hour(), minute: mHour.minute() });

      const duration = a.duration.clone();
      let found;

      // detect if the current block is within the duration after the beginning of the appointment
      while((duration.hour() > 0 || duration.minute() > 0) && !found) {
        // subtract 30 minutes for each iteration
        duration.subtract({ minute: 30 });
        // get the date of the subtracted duration
        const startDate = dateToTest.clone().subtract({ hour: duration.hour(), minute: duration.minute() });
        found = a.date.isSame(startDate);
      }

      // test if the date of the block is the same as the date of the appointment
      if (found) {
        return found;
      }

      if (withDefaults) {
        return mHour.isBetween({ hour: 11, minute: 30 }, { hour: 13 }) || dateToTest.weekday() === 0;
      }

      return false;
    });
  }
}
