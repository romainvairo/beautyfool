import React from 'react';


const SignupView = ({ translations }) => (
  <form>
    <div>
      <TextField
        required
        id="standard-required"
        label={ translations.firstName }
        defaultValue="Hello World"
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label={ translations.lastName }
        defaultValue="Hello World"
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label={ translations.userName }
        defaultValue="Hello World"
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label={ translations.email }
        defaultValue="Hello World"
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label={ translations.password }
        defaultValue="Hello World"
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label={ translations.confirmedPassword }
        defaultValue="Hello World"
        margin="normal"
      />
      <Button variant="contained" color="primary">
        { translations.submitButton }
      </Button>
      <FormControlLabel
        control={
          <Checkbox
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
