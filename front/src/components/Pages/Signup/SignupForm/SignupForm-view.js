import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Grid } from '@material-ui/core';

import './SignupForm.scss';
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
<Grid container justify="center">
  <Grid xs={10} md={8} lg={6} item>
    <form className="SignupFormForm">
      <Grid container spacing={2} direction="column">
        <Grid container item>
          <TextField
            fullWidth
            required
            variant="outlined"
            label={translations.firstName}
            margin="normal"
            value={firstName}
            onChange={onChange('firstName')}
          />
        </Grid>
        <Grid container item>
          <TextField
            fullWidth
            required
            variant="outlined"
            label={translations.lastName}
            margin="normal"
            value={lastName}
            onChange={onChange('lastName')}
          />
        </Grid>
        <Grid container item>
          <TextField
            fullWidth
            required
            variant="outlined"
            label={translations.userName}
            margin="normal"
            value={userName}
            onChange={onChange('userName')}
          />
        </Grid>
        <Grid container item>
          <TextField
            fullWidth
            required
            variant="outlined"
            label={translations.email}
            margin="normal"
            value={email}
            onChange={onChange('email')}
          />
        </Grid>
        <Grid container item>
          <TextField
            fullWidth
            required
            variant="outlined"
            label={translations.password}
            margin="normal"
            value={password}
            onChange={onChange('password')}
          />
        </Grid>
        <Grid container item>
          <TextField
            fullWidth
            required
            variant="outlined"
            label={translations.confirmedPassword}
            margin="normal"
            value={confirmedPassword}
            onChange={onChange('confirmedPassword')}
          />
        </Grid>
        <Grid container item justify="center">
          <Button variant="contained" color="primary">
            {translations.submitButton}
          </Button>
        </Grid>
        <Grid container item justify="center">
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
        </Grid>
      </Grid>
    </form>
   </Grid>
</Grid>
);

export default SignupFormView;
