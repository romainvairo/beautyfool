import React from 'react';
import LoginForm from './Form';
import { Grid, Typography } from '@material-ui/core';


const LoginView = ({ translations, history }) => (
  <section className="Login">
    <Grid container justify="center" className="mt-6">
      <Typography variant="h4">{ translations.title }</Typography>
    </Grid>
    <LoginForm history={history} />
  </section>
);

export default LoginView;
