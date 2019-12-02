import React from 'react';
import { Grid } from '@material-ui/core';

import User from './User';

const UsersGetAllView = ({ users, DeleteSnackbar, deleteAction, GetSnackbar }) => (
  <Grid container direction="column" alignItems="center" id="infinite-scroll">
    <DeleteSnackbar />
    <GetSnackbar />
    {users.map(user => (
      <User key={user._id} user={user} deleteAction={deleteAction} />
    ))}
  </Grid>
);

export default UsersGetAllView;
