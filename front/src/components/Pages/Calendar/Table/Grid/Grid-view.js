import React from 'react';
import classNames from 'classnames';

import { rangeDate } from '../../../../../utils';
import './Grid.scss';

// Parentheses into the GridView's function == return
// Acollade into the GridView's function == return nothing
const GridView = ({ date, isTimeOccupied, isCellSelected, onClick }) => (
  <tbody>
    {console.log(date.daysInMonth())}
    {rangeDate().map(hour => (
      <tr key={hour.toString()}>
        {rangeDate({ day: 4 }, { day: date.daysInMonth() }, { day: 5 }).map(day => (
          <td
            key={day.toString()}
            onClick={onClick(hour, day)}
            // dataset == put a value from the HTML element
            data-is-occupied={isTimeOccupied(hour, day)}
            data-is-selected={isCellSelected(hour, day)}
            className={classNames(
              'border-2 py-1 px-2 border-gray-500 h-6',
              {
                'bg-red-600': isTimeOccupied(hour, day),
                'cursor-pointer': !isTimeOccupied(hour, day),
                'bg-green-400': isCellSelected(hour, day) && !isTimeOccupied(hour, day),
              }
            )}
          ></td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default GridView;
