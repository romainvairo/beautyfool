import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Pagination from '../../Pagination';

const FoolistHeaderView = ({ page, lastPage, onPageChange, title }) => (
  <>
    <Grid container item justify="center" className="mt-3">
      <Pagination page={page} lastPage={lastPage} onPageChange={onPageChange} />
    </Grid>
    <Typography variant="h4" className="mt-4">{title}</Typography>
  </>
);

export default FoolistHeaderView;
