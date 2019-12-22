import React from 'react';

const UserView = ({ onChange, formData }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.blockStart || ''}
      onChange={onChange('blockStart')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.blockEnd || ''}
      onChange={onChange('blockEnd')}
    />
  </>
);

export default UserView;
