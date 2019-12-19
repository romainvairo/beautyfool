import moment from 'moment';

export const appointments = [
  {
    // create a date on 1st january 1970 at 1 hour 30 minutes and 0 second
    duration: moment({ hour: 1, minute: 30 }),
    date: moment({ year: 2019, month: 11, day: 2, hour: 10 })
  }
];
