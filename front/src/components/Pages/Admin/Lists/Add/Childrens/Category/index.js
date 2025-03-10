import React from 'react';

const UserView = ({ onChange, formData }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.name || ''}
      onChange={onChange('name')}
    />
  </>
);

export default UserView;
