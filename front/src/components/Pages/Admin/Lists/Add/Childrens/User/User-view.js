import React from 'react';

const UserView = ({ onChange, formData }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.username || ''}
      onChange={onChange('username')}
    />
  </>
);

export default UserView;
