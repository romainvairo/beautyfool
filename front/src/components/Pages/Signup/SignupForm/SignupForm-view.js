import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Grid } from '@material-ui/core';

import './SignupForm.scss';

const SignupFormView = ({
  translations,
  firstname,
  lastname,
  username,
  email,
  password,
  confirmedPassword,
  subscribeNewsLetter,
  onChange,
  onSubmit,
}) => (
<Grid container justify="center">
  <Grid xs={10} md={8} lg={6} item>
    <form onSubmit={onSubmit} className="SignupFormForm">
      <Grid container spacing={2} direction="column">
        <Grid container item>
          <TextField
            fullWidth
            required
            variant="outlined"
            label={translations.firstname}
            margin="normal"
            value={firstname}
            onChange={onChange('firstname')}
          />
        </Grid>
        <Grid container item>
          <TextField
            fullWidth
            required
            variant="outlined"
            label={translations.lastname}
            margin="normal"
            value={lastname}
            onChange={onChange('lastname')}
          />
        </Grid>
        <Grid container item>
          <TextField
            fullWidth
            required
            variant="outlined"
            label={translations.username}
            margin="normal"
            value={username}
            onChange={onChange('username')}
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
            type="password"
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
            type="password"
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
          <Button type="submit" variant="contained" color="primary">
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
