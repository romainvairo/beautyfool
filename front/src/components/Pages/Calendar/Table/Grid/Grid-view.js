import React from 'react';
import classNames from 'classnames';

import { range } from '../../../../../utils';
import './Grid.scss';

// Parentheses into the GridView's function == return
// Acollade into the GridView's function == return nothing
const GridView = ({ date, isTimeOccupied, isCellSelected, onClick }) => (
  <tbody>
    {range(1, 20).map(hour => (
      <tr key={hour}>
        {range(1, date.daysInMonth()).map(day => (
          <td
            key={day}
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
