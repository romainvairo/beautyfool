import React from 'react';
import { Grid } from '@material-ui/core';

import User from './User';

const UsersGetAllView = ({ users, Snackbar, deleteAction }) => (
  <Grid container direction="column" alignItems="center">
    <Snackbar />
    {users.map(user => (
      <User key={user._id} user={user} deleteAction={deleteAction} />
    ))}
  </Grid>
);

export default UsersGetAllView;
