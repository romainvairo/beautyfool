import React from 'react';

const UserView = ({ formData, onChange }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.username}
      onChange={onChange('username')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.firstname}
      onChange={onChange('firstname')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.lastname}
      onChange={onChange('lastname')}
    />
  </>
);

export default UserView;
