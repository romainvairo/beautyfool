import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const SignupFormView = ({ translations }) => (
  <form>
    <div>
      <TextField
        required
        id="standard-required"
        checking=""
        name="firstName"
        label={ translations.firstName }
        margin="normal"
        value={firstName}
        onInputChange={onInputChange}
      />
        <TextField
        required
        id="standard-required"
        checking=""
        name="lastName"
        label={ translations.lastName }
        margin="normal"
        value={lastName}
        onInputChange={onInputChange}
      />
        <TextField
        required
        id="standard-required"
        checking=""
        name="userName"
        label={ translations.userName }
        margin="normal"
        value={userName}
        onInputChange={onInputChange}
      />
        <TextField
        required
        id="standard-required"
        checking=""
        name="email"
        label={ translations.email }
        margin="normal"
        value={email}
        onInputChange={onInputChange}
      />
        <TextField
        required
        id="standard-required"
        checking=""
        name="password"
        label={ translations.password }
        margin="normal"
        value={password}
        onInputChange={onInputChange}
      />
        <TextField
        required
        id="standard-required"
        checking=""
        name="confirmedPassword"
        label={ translations.confirmedPassword }
        margin="normal"
        value={confirmedPassword}
        onInputChange={onInputChange}
      />
      <Button variant="contained" color="primary">
        { translations.submitButton }
      </Button>
      <FormControlLabel
        control={
          <Checkbox
            checking=""
            name="subscribeNewsLetter"
            checked={true}
            onChange={() => {}}
            value={''}
          />
        }
        label={ translations.subscribeNewsLetter }
      />
    </div>
  </form>
);

export default SignupFormView;
