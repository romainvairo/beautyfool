import React from 'react';
import { composeDifference } from '../_composeDifference';

const FeedbackView = ({ formData, onChange }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.text}
      onChange={onChange('text')}
    />
    <input
      type="number"
      className="bg-gray-500"
      value={formData.rate}
      onChange={onChange('rate')}
    />
  </>
);

FeedbackView.difference = composeDifference([
  'text',
  'rate',
]);

export default FeedbackView;
