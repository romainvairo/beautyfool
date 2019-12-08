import React from 'react';
import { Grid } from '@material-ui/core';

import './Users.scss';
import UsersGetAllView from './GetAll';
import SearchOptionsPanel from '../SearchOptionsPanel';
import Foolist from '../../../Shared/Foolist';

const UsersView = ({ translations, page, onPageChange }) => (
  <Grid container justify="space-around" className="list-container">
    <Foolist
      page={page}
      lastPage={10}
      onPageChange={onPageChange}
      title={translations.title}
    >
      <UsersGetAllView page={page} onPageChange={onPageChange} lastPage={10} />
    </Foolist>
    <SearchOptionsPanel />
  </Grid>
);

export default UsersView;
