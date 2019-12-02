import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import UsersGetAllView from './GetAll';
import Divider from '../../../Shared/Divider';
import SearchOptionsPanel from '../SearchOptionsPanel';

const UsersView = ({ translations, page }) => (
  <Grid container className="justify-around">
    <Grid xs={12} sm={10} md={8} item className="md:pl-5">
      <Typography variant="h4" className="mt-4">{translations.title}</Typography>
      <Divider />

      <Grid container className="mt-4">
        <Grid xs={12} item>
          <UsersGetAllView page={page} />
        </Grid>
      </Grid>
    </Grid>
    <SearchOptionsPanel />
  </Grid>
);

export default UsersView;
