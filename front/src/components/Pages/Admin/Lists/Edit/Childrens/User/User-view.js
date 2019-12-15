import React from 'react';
import { composeDifference } from '../_composeDifference';

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

UserView.difference = composeDifference([
  'username',
  'firstname',
  'lastname',
  'email',
  'picture',
  'birthdate',
  'fidelity',
  'city',
  'zipcode',
  'address',
  'phone',
]);

export default UserView;
