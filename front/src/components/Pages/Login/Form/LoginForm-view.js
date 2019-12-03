import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid } from '@material-ui/core';

import './LoginForm.scss';


const LoginFormView = ({ translations, onChange, password, email }) => (
  <Grid container justify="center">
    <Grid xs={10} md={8} lg={6} item>
      <form className="loginForm">
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
              fullWidth
              className="password"
              label={translations.password}
              margin="normal"
              value={password}
              variant="outlined"
              onChange={onChange('password')}
              type='password'
            />
          </Grid>
          <Grid container item justify="center">
            <Link to="sqds" className="forgottenPassword">
              {translations.forgottenPassword}
            </Link>
          </Grid>
          <Grid container item justify="center">
            <Button className="submitButton" color="primary" variant="contained">{translations.submitButton}</Button>
          </Grid>
          <Grid container item justify="center">
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
