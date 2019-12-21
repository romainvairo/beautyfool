import React from 'react';
import classNames from 'classnames';
import { Tooltip } from '@material-ui/core';

import { range } from '../../../../../../utils';
import './Grid.scss';
import AppointmentTooltip from './AppointmentTooltip';

// Parentheses into the GridView's function == return
// Acollade into the GridView's function == return nothing
const GridView = ({ date, getIsAppointment, getIsClosed, onClick, getAppointment }) => (
  <tbody>
    {range(1, 20).map(hour => (
      <tr key={hour}>
        {range(1, date.daysInMonth()).map(day => (
          <Tooltip
            key={day}
            title={<AppointmentTooltip appointment={getAppointment(hour, day)} />}
          >
            <td
              onClick={onClick(hour, day)}
              // dataset == put a value from the HTML element
              data-is-occupied={getIsAppointment(hour, day)}
              className={classNames(
                'border-2 py-1 px-2 border-gray-500 h-6',
                {
                  'bg-red-600': getIsClosed(hour, day),
                  'cursor-pointer': getIsAppointment(hour, day),
                  'bg-green-400': getIsAppointment(hour, day),
                }
              )}
            ></td>
          </Tooltip>
        ))}
      </tr>
    ))}
  </tbody>
);

export default GridView;
