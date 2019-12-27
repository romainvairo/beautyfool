import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ConfirmationEmailView = ({ messageName, translations }) => (
  <div>
    <p>
      {translations.message[messageName]}
    </p>
    <Button component={Link} to="/profile">
      {translations.returnProfile}
    </Button>
    <Button component={Link} to="/">
      {translations.returnHome}
    </Button>
  </div>
);
export default ConfirmationEmailView;
