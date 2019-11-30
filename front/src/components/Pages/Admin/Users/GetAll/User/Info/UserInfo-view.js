import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const UserInfoView = ({ user, translations }) => (
  <Grid xs={12} sm={8} item>
    <Grid container className="h-full" direction="column" justify="space-around">
      <Grid item>
        <Typography variant="body1" className="text-center sm:text-left">
          {translations.username}: {user.username}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" className="text-center sm:text-left">
          {translations.email}: {user.email}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default UserInfoView;
