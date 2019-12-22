import React from 'react';

const UserView = ({ onChange, formData }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.question || ''}
      onChange={onChange('question')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.answer || ''}
      onChange={onChange('answer')}
    />
  </>
);

export default UserView;
