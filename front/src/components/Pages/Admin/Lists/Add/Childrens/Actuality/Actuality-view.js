import React from 'react';

const UserView = ({ onChange, formData }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.title || ''}
      onChange={onChange('title')}
    />
    <textarea
      onChange={onChange('content')}
    >
      {formData.content || ''}
    </textarea>
  </>
);

export default UserView;
