import React from 'react';
import { Grid } from '@material-ui/core';

import FoolistHeader from './Header';
import FoolistList from './List';
import AddProps from './AddProps';
import Divider from '../Divider';

const FoolistView = ({ page, lastPage, onPageChange, title, children, ...foolistListProps }) => (
  <Grid xs={12} sm={10} md={8} item className="md:pl-5">
    <FoolistHeader
      page={page}
      lastPage={lastPage}
      onPageChange={onPageChange}
      title={title}
    />
    <Divider />

    <Grid container className="mt-4">
      <FoolistList
        {...foolistListProps}
        page={page}
        lastPage={lastPage}
        onSwipe={onPageChange}
      >
        {children}
      </FoolistList>
    </Grid>
  </Grid>
);

FoolistView.defaultProps = {
  topThresold: 200
};

FoolistView.AddProps = AddProps;

export default FoolistView;
