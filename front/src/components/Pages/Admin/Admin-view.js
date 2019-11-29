import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import AdminMenu from './AdminMenu';

const Admin = ({ translations }) => (
  <Grid container justify="center">
    <Grid item xs={12}>
      <Typography variant="h3" className="text-center">{translations.title}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid container>
        <AdminMenu />
      </Grid>
    </Grid>
  </Grid>
);

export default Admin;
