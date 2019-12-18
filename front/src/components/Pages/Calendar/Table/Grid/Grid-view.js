import React from 'react';
import classNames from 'classnames';

import { range } from '../../../../../utils';
import { IsTimeOccupied } from './actions';
import './Grid.scss';

//! TEMP
import { appointments } from './data';

// Parentheses into the GridView's function == return
// Acollade into the GridView's function == return nothing
const GridView = ({ date }) => (
  <tbody>
    {range(1, 20).map(hour => (
      <tr key={hour}>
        {range(1, date.daysInMonth()).map(day => (
          <td
            key={day}
            className={classNames(
              'border-2 py-1 px-2 border-gray-500 h-6',
              {
                'bg-red-600': new IsTimeOccupied(appointments)
                  .setDate(date)
                  .setDay(day)
                  .setHour(hour)
                  .results(),
              }
            )}
          ></td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default GridView;
