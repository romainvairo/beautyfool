import React from 'react';
import SignupForm from './SignupForm';
import { Grid, Typography } from '@material-ui/core';

const SignupView = ({ translations, history }) => (
  <section className="Signup">
    <Grid container justify="center" className="mt-6">
      <Typography variant="h4">{ translations.title }</Typography>
    </Grid>
    <SignupForm history={history} />
  </section>

);

export default SignupView;
