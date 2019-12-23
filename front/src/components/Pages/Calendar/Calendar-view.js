import React from 'react';
import { DayPilotCalendar } from 'daypilot-pro-react';

const CalendarView = ({ onTimeRangeSelected, state, setRef }) => (
  <div>
    <DayPilotCalendar
      {...state}
      onTimeRangeSelect={onTimeRangeSelected}
      ref={setRef}
    />
  </div>
);

export default CalendarView;
