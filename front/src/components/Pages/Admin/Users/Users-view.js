import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import UsersGetAllView from './GetAll';
import Divider from '../../../Shared/Divider';

const UsersView = ({ translations, page }) => (
  <Grid container justify="center" className="mt-4">
    <Grid xs={12} sm={10} md={8} item>
      <Typography variant="h4">{translations.title}</Typography>
      <Divider />

      <Grid container className="mt-4">
        <Grid xs={12} item>
          <UsersGetAllView page={page} />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default UsersView;
