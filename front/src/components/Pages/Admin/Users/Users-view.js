import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import UsersGetAllView from './GetAll';
import Divider from '../../../Shared/Divider';
import SearchOptionsPanel from '../SearchOptionsPanel';
import Pagination from '../../../Shared/Pagination';
import './Users.scss';

const UsersView = ({ translations, page, onPageChange }) => (
  <Grid container justify="space-around" className="list-container">
    <Grid xs={12} sm={10} md={8} item className="md:pl-5">
      <Grid item xs={12}>
        <Pagination page={page} onPageChange={onPageChange} lastPage={10} />
      </Grid>
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
