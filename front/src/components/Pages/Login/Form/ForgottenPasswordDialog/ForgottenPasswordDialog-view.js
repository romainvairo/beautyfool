import React from 'react';
import { Dialog, DialogTitle, TextField, Button } from '@material-ui/core';

const ForgottenPasswordDialogView = ({ open, onClose, email, onChange, onSubmit, message }) => (
  <Dialog
    onClose={onClose}
    aria-labelledby="forgotten-password-dialog-title"
    open={open}
  >
    <DialogTitle id="forgotten-password-dialog-title">
      Send an email to reset my password
    </DialogTitle>

    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        label="email"
        value={email}
        variant="outlined"
        onChange={onChange('email')}
      />

      <Button type="submit" variant="contained" className="ml-48 mt-6 mb-6">
        Reset my password
      </Button>
      {message}
    </form>
  </Dialog>
);

export default ForgottenPasswordDialogView;
