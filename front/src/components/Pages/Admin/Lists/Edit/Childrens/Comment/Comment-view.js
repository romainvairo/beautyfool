import React from 'react';
import { composeDifference } from '../_composeDifference';

const CommentView = ({ formData, onChange }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.text}
      onChange={onChange('text')}
    />
  </>
);

CommentView.difference = composeDifference([
  'text',
]);

export default CommentView;
