import React from 'react';

import User from './User';
import Foolist from '../../../../Shared/Foolist';

const UsersGetAllView = ({ users, DeleteSnackbar, callDeleteRequest, GetSnackbar }) => (
  <Foolist.AddProps>
    <DeleteSnackbar />
    <GetSnackbar />
    {users.map(user => (
      <User key={user._id} user={user} callDeleteRequest={callDeleteRequest} />
    ))}
  </Foolist.AddProps>
);

export default UsersGetAllView;
