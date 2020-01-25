import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import AdminMenu from './AdminMenu';
import './Admin.scss';

const Admin = ({ translations }) => (
  <Grid container justify="center"className="mb-16">
    <Grid item xs={12}>
      <Typography variant="h3" className="text-center mt-2">{translations.title}</Typography>
    </Grid>
    <Grid item xs={12} className="AdminButton mt-4">
      <Grid container>
        <AdminMenu />
      </Grid>
    </Grid>
  </Grid>
);

export default Admin;
