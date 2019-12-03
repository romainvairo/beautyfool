import React from 'react';
import SignupForm from './SignupForm';
import { Grid, Typography } from '@material-ui/core';

const SignupView = ({ translations }) => (
  <section className="Signup">
    <Grid container justify="center" className="mt-6">
      <Typography variant="h4">{ translations.title }</Typography>
    </Grid>
    <SignupForm />
  </section>

);

export default SignupView;
