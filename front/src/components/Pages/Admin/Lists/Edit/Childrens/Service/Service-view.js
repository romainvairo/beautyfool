import React from 'react';
import { composeDifference } from '../_composeDifference';

const ServiceView = ({ formData, onChange }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.name}
      onChange={onChange('name')}
    />
    <input
      type="time"
      className="bg-gray-500"
      value={formData.duration}
      onChange={onChange('duration')}
    />
    <input
      type="number"
      className="bg-gray-500"
      value={formData.price}
      onChange={onChange('price')}
    />
  </>
);

ServiceView.difference = composeDifference([
  'name',
  'duration',
  'price',
]);

export default ServiceView;
