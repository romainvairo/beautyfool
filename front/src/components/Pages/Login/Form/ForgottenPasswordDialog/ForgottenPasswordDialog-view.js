import React from 'react';
import { Dialog, DialogTitle, TextField, Button } from '@material-ui/core';

const ForgottenPasswordDialogView = ({ open, onClose, email, onChange, onSubmit, message }) => (
  <Dialog
    onClose={onClose}
    aria-labelledby="forgotten-password-dialog-title"
    open={open}
  >
    <DialogTitle id="forgotten-password-dialog-title" className="text-center">
      Entrer votre E-mail pour réinitialiser votre nouveau mot de passe
    </DialogTitle>

    <form onSubmit={onSubmit}>
      <TextField
        text-center
        fullWidth
        label="email"
        value={email}
        variant="outlined"
        onChange={onChange('email')}
      />

      <Button type="submit" variant="contained" className="ml-40 mt-6 mb-6">
        Reinitialiser mon mot de passe
      </Button>
      {message}
    </form>
  </Dialog>
);

export default ForgottenPasswordDialogView;
