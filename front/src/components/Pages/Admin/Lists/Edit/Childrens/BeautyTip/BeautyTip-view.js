import React from 'react';
import { composeDifference } from '../_composeDifference';

const BeautyTipView = ({ formData, onChange }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.title}
      onChange={onChange('title')}
    />
    <textarea onChange={onChange('content')}>
      {formData.content}
    </textarea>
  </>
);

BeautyTipView.difference = composeDifference([
  'title',
  'content',
]);

export default BeautyTipView;
