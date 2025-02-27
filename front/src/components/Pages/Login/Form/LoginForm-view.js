import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid } from '@material-ui/core';

import './LoginForm.scss';
import ForgottenPasswordDialog from './ForgottenPasswordDialog';

const LoginFormView = ({
  translations,
  onChange,
  password,
  email,
  onSubmit,
  error,
  openDialog,
  onOpen,
  onClose,
}) => (
  <Grid container justify="center" className="mt-16">
    <ForgottenPasswordDialog open={openDialog} onClose={onClose} />
    <Grid xs={10} md={8} lg={6} item>
      <form onSubmit={onSubmit} className="loginForm mt-3">
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
            <span onClick={onOpen} className="forgottenPassword">
              {translations.forgottenPassword}
            </span>
          </Grid>
          <p className="text-center">{error}</p>
          <Grid container item justify="center" className="mt-6">
            <Button type="submit" className="submitButton" variant="contained">{translations.submitButton}</Button>
          </Grid>
          <Grid container item justify="center" className="mt-6">
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
