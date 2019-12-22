import React from 'react';
import { composeDifference } from '../_composeDifference';

const QuestionView = ({ formData, onChange }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.question}
      onChange={onChange('question')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.answer}
      onChange={onChange('answer')}
    />
  </>
);

QuestionView.difference = composeDifference([
  'question',
  'answer',
]);

export default QuestionView;
