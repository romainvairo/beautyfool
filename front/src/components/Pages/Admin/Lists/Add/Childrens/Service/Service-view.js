import React from 'react';

const UserView = ({ onChange, formData }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.name || ''}
      onChange={onChange('name')}
    />
    <input
      type="time"
      className="bg-gray-500"
      value={formData.duration || ''}
      onChange={onChange('duration')}
    />
    <input
      type="number"
      className="bg-gray-500"
      value={formData.price || ''}
      onChange={onChange('price')}
    />
  </>
);

export default UserView;
