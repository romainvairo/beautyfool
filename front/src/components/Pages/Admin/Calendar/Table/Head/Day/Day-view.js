import React from 'react';

import './Day.scss';

const DayView = ({ language, date }) => (
  <th className="border-2 py-1 px-2 border-gray-500">
    <div>
      {date.locale(language).format('dddd')}
    </div>
    <div>
      {date.format('DD')}
    </div>
  </th>
);

export default DayView;
