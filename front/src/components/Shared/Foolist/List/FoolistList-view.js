import React from 'react';
import { Grid } from '@material-ui/core';

import SuperList from '../../SuperList';

const FoolistListView = ({
  onSwipe,
  onScroll,
  topThresold,
  page,
  lastPage,
  children,
  ...superListProps
}) => (
  <Grid container direction="column" alignItems="center">
    <SuperList
      {...superListProps}
      onSwipe={onSwipe}
      onScroll={onScroll}
      topThresold={topThresold}
      page={page}
      lastPage={lastPage}
    >
      {children}
    </SuperList>
  </Grid>
);

export default FoolistListView;
