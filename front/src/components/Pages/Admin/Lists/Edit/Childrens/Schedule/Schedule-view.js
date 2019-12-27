import React from 'react';
import { composeDifference } from '../_composeDifference';

const ScheduleView = ({ formData, onChange }) => (
  <>
    <input
      type="date"
      className="bg-gray-500"
      value={formData.blockEnd}
      onChange={onChange('blockEnd')}
    />
    <input
      type="date"
      className="bg-gray-500"
      value={formData.blockStart}
      onChange={onChange('blockStart')}
    />
  </>
);

ScheduleView.difference = composeDifference([
  'blockStart',
]);

export default ScheduleView;
