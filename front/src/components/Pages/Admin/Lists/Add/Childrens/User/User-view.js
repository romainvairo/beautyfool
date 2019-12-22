import React from 'react';

const UserView = ({ onChange, formData }) => (
  <>
    <input
      type="text"
      className="bg-gray-500"
      value={formData.username || ''}
      onChange={onChange('username')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.firstname || ''}
      onChange={onChange('firstname')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.lastname || ''}
      onChange={onChange('lastname')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.email || ''}
      onChange={onChange('email')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.picture || ''}
      onChange={onChange('picture')}
    />
    <input
      type="date"
      className="bg-gray-500"
      value={formData.birthdate || ''}
      onChange={onChange('birthdate')}
    />
    <input
      type="number"
      className="bg-gray-500"
      value={formData.fidelity || ''}
      onChange={onChange('fidelity')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.city || ''}
      onChange={onChange('city')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.zipcode || ''}
      onChange={onChange('zipcode')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.address || ''}
      onChange={onChange('address')}
    />
    <input
      type="text"
      className="bg-gray-500"
      value={formData.phone || ''}
      onChange={onChange('phone')}
    />
  </>
);

export default UserView;
