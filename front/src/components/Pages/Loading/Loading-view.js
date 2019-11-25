import React from 'react';
import { upperFirst } from 'lodash';
import { LinearProgress, Typography, Grid } from '@material-ui/core';

import './Loading.scss';

const LoadingView = ({ translations, name }) => (
  <Grid container className="Loading" justify="center">
    <LinearProgress classes={{ bar: 'bar' }} className="p-absolute top-0 page-loader w-full" />

    <Typography variant="h4" className="py-2 by-2 border-gradient color-blue">
      <span className="text-white">
        {upperFirst(translations.pages[name])} {translations.message}
      </span>
    </Typography>
  </Grid>
);

export default LoadingView;
