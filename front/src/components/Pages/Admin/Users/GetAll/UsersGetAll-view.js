import React from 'react';
import { Grid } from '@material-ui/core';

import User from './User';

const UsersGetAllView = ({ users, DeleteSnackbar, callDeleteRequest, GetSnackbar }) => (
  <Grid container direction="column" alignItems="center" id="infinite-scroll">
    <DeleteSnackbar />
    <GetSnackbar />
    {users.map(user => (
      <User key={user._id} user={user} callDeleteRequest={callDeleteRequest} />
    ))}
  </Grid>
);

export default UsersGetAllView;
