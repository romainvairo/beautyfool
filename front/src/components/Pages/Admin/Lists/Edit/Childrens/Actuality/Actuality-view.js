import React from 'react';
import { composeDifference } from '../_composeDifference';

const ActualityView = ({ formData, onChange }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.title}
      onChange={onChange('title')}
    />
    <textarea
      onChange={onChange('content')}
      className="bg-gray-500"
    >
      {formData.content}
    </textarea>
  </>
);

ActualityView.difference = composeDifference([
  'title',
  'content',
]);

export default ActualityView;
