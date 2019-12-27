import React from 'react';
import { composeDifference } from '../_composeDifference';

const AppointmentView = ({ formData, onChange }) => (
  <>
    <input
      type="date"
      className="bg-gray-500"
      value={formData.date}
      onChange={onChange('date')}
    />
  </>
);

AppointmentView.difference = composeDifference([
  'date',
]);

export default AppointmentView;
