import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

const LoginFormView = ({ translations, onChange, password, email }) => (
  <form className="loginForm">
    <TextField
      label={translations.email}
      value={email}
      variant="outlined"
      onChange={onChange('email')}
    />

    <TextField
      label={translations.password}
      value={password}
      variant="outlined"
      onChange={onChange('password')}
      type='password'
    />

    <Link to="sqds">
      {translations.forgottenPassword}
    </Link>
    <Button variant="contained">{translations.submitButton}</Button>
    <Link to="/signup">
      {translations.submitButton}
    </Link>
  </form>
);

export default LoginFormView;
