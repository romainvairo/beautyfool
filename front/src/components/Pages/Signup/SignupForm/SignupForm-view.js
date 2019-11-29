import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';

const SignupFormView = ({
  translations,
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmedPassword,
  subscribeNewsLetter,
  onChange,

}) => (

  <form className="SignupFormForm">
    <TextField
      required
      variant="outlined"
      label={translations.firstName}
      margin="normal"
      value={firstName}
      onChange={onChange('firstName')}
    />
    <TextField
      required
      variant="outlined"
      label={translations.lastName}
      margin="normal"
      value={lastName}
      onChange={onChange('lastName')}
    />
    <TextField
      required
      variant="outlined"
      label={translations.userName}
      margin="normal"
      value={userName}
      onChange={onChange('userName')}
    />
    <TextField
      required
      variant="outlined"
      label={translations.email}
      margin="normal"
      value={email}
      onChange={onChange('email')}
    />
    <TextField
      required
      variant="outlined"
      label={translations.password}
      margin="normal"
      value={password}
      onChange={onChange('password')}
    />
    <TextField
      required
      variant="outlined"
      label={translations.confirmedPassword}
      margin="normal"
      value={confirmedPassword}
      onChange={onChange('confirmedPassword')}
    />
    <Button variant="contained" color="primary">
      {translations.submitButton}
    </Button>
    <FormControlLabel
      control={
        <Checkbox
          checked={subscribeNewsLetter}
          onChange={onChange('subscribeNewsLetter', 'checked')}
          value={subscribeNewsLetter}
        />
      }
      label={translations.subscribeNewsLetter}
    />
  </form>

);

export default SignupFormView;
