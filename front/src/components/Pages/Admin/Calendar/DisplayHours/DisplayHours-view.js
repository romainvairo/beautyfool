import React from 'react';

const DisplayHoursView = ({ hours }) => hours.map(hour => (
  <div key={hour} className="text-right mr-1">
    {hour}
  </div>
));

export default DisplayHoursView;
