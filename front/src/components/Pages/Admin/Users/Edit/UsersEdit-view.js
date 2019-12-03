import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Divider from '../../../../Shared/Divider';
import UserEditForm from './Form';

const UsersEditView = ({ translations, GetSnackbar, user }) => (
  <Grid container justify="center">
    <GetSnackbar />
    <Grid xs={12} sm={10} md={8} item>
      <Typography variant="h4" className="mt-4">
        <span className="mr-4">{translations.title}:</span>
        <span className="font-bold">{user.firstname} {user.lastname}</span>
      </Typography>
      <Divider />

      <Grid container className="mt-4">
        <Grid xs={12} item>
          <UserEditForm />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default UsersEditView;
