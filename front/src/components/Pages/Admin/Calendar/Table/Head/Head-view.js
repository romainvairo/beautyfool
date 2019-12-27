import React from 'react';
import moment from 'moment';

import { range } from '../../../../../../utils';
import Day from './Day';

const HeadView = ({ date, language }) => (
  <thead>
    <tr className="calendar-content-days">
      {range(1, date.daysInMonth()).map(day => (
        <Day
          key={day}
          date={moment({ year: date.year(), month: date.month(), day: day })}
          language={language}
        />
      ))}
    </tr>
  </thead>
);

export default HeadView;
