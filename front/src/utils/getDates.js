import moment from 'moment';

export const getDates = (startDate, endDate) => {
  let dates = [];
  let currentDate = moment(startDate);
  let endMilli = +moment(endDate);

  while (+currentDate <= endMilli) {
    dates.push(currentDate);
    currentDate = currentDate.clone().add(30, 'minute');
  }

  return dates;
}
