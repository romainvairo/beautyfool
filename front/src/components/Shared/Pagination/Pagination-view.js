import React from 'react';
import { Grid } from '@material-ui/core';

import PageButton from './PageButton';
import FirstPages from './FirstPages';
import PreviousPages from './PreviousPages';
import NextPages from './NextPages';
import LastPages from './LastPages';
import PaginationDivider from './Divider';

const PaginationView = ({ onPageChange, currentPage, lastPage }) => (
  <Grid container justify="space-around">
    <FirstPages page={currentPage} onPageChange={onPageChange} />
    <PaginationDivider page={currentPage} lastPage={lastPage + 5} />
    <PreviousPages page={currentPage} onPageChange={onPageChange} />
    <PageButton page={currentPage} onClick={onPageChange} />
    <NextPages page={currentPage} onPageChange={onPageChange} lastPage={lastPage} />
    <PaginationDivider page={currentPage} lastPage={lastPage} />
    <LastPages page={currentPage} onPageChange={onPageChange} lastPage={lastPage} />
  </Grid>
);

export default PaginationView;
