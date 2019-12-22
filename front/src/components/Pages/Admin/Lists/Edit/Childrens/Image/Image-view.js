import React from 'react';
import { composeDifference } from '../_composeDifference';

const ImageView = ({ formData, onChange }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.title}
      onChange={onChange('title')}
    />
  </>
);

ImageView.difference = composeDifference([
  'title',
]);

export default ImageView;
