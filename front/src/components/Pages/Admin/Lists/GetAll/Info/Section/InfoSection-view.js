import React from 'react';
import { Grid } from '@material-ui/core';

const InfoSectionView = ({ children }) => (
  <Grid container direction="column" justify="space-around" className="h-full">
    {children}
  </Grid>
);

export default InfoSectionView;
