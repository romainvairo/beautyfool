import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const InfoPartView = ({ children }) => (
  <Grid item>
    <Typography variant="body1" className="text-center sm:text-left">
      {children}
    </Typography>
  </Grid>
);

export default InfoPartView;
