import React from 'react';
import { composeDifference } from '../_composeDifference';

const CategoryView = ({ formData, onChange }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.name}
      onChange={onChange('name')}
    />
  </>
);

CategoryView.difference = composeDifference([
  'name',
]);

export default CategoryView;
