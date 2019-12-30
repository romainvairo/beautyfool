import React from 'react';
import LoginForm from './Form';
import { Grid, Typography } from '@material-ui/core';

import './Login.scss';

const LoginView = ({ translations, history }) => (
  <section className="login">
    <Grid container justify="center" className="mt-6">
      <Typography variant="h4">{ translations.title }</Typography>
    </Grid>
    <LoginForm history={history} />
  </section>
);

export default LoginView;
