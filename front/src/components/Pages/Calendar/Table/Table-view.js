import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

import './Table.scss';
import { range } from '../../../../utils';

//! TEMP
import { appointments } from './data';

const TableView = ({ language, date }) => (
  <table className="my-4 border-collapse block">
    <thead>
      <tr className="calendar-content-days">
        {range(1, date.daysInMonth()).map(day => (
          <th key={day} className="border-2 py-1 px-2 border-gray-500">
            <div>
              {moment({ year: date.year(), month: date.month(), day: day}).locale(language).format('dddd')}
            </div>
            <div>
              {moment({ year: date.year(), month: date.month(), day: day }).format('DD')}
            </div>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {range(1, 20).map(hour => (
        <tr key={hour}>
          {range(1, date.daysInMonth()).map(day => (
            <td
              key={day}
              className={classNames(
                'border-2 py-1 px-2 border-gray-500 h-6',
                {
                  'bg-red-600': appointments.find(a => {
                    // create the hour where we will recover both the hour and the minutes
                    const mHour = moment({ hour:8, minute: 30 });
                    // add 30 minutes for each hour interval
                    range(1, hour).forEach(() => mHour.add({ minute: 30 }));

                    // create the date of the current case based on the day (x axis) and the hour/minutes (y axis)
                    const dateToTest = moment({ year: date.year(), month: date.month(), day: day, hour: mHour.hour(), minute: mHour.minute() });

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
                    return found || mHour.isBetween({ hour: 11, minute: 30}, { hour: 13 }) || dateToTest.weekday() === 0;
                  })
                }
              )}
            ></td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>

);

export default TableView;
