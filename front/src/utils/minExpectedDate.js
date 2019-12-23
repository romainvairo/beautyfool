import moment from 'moment';


export const minExpectedDate = date => {
  if (moment.isDate(date)) {
    return date;
  }

  const mDate = moment(0);

  for (const key in date) {
    mDate[key](date[key]);
  }

  return mDate;
}
