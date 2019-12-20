import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid } from '@material-ui/core';

import './LoginForm.scss';


const LoginFormView = ({ translations, onChange, password, email, onSubmit, error}) => (
  <Grid container justify="center">
    <Grid xs={10} md={8} lg={6} item>
      <form onSubmit={onSubmit} className="loginForm">
        <Grid container spacing={2} direction="column" >
          <Grid container item>
            <TextField
              fullWidth
              className="email"
              label={translations.email}
              margin="normal"
              value={email}
              variant="outlined"
              onChange={onChange('email')}
            />
          </Grid>
          <Grid container item>
            <TextField
              type="password"
              fullWidth
              className="password"
              label={translations.password}
              margin="normal"
              value={password}
              variant="outlined"
              onChange={onChange('password')}
            />
          </Grid>
          <Grid container item justify="center">
            <Link to="/forgotten-password" className="forgottenPassword">
              {translations.forgottenPassword}
            </Link>
          </Grid>
          <p className="text-center">{error}</p>
          <Grid container item justify="center">
            <Button type="submit" className="submitButton" color="primary" variant="contained">{translations.submitButton}</Button>
          </Grid>
          <Grid container item justify="center" className="mt-3">
            <Link className="signup" to="/signup" >
              {translations.signupButton}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
);

export default LoginFormView;
