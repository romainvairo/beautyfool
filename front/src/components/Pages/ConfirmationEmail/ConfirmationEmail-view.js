import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './ConfirmationEmail.scss';

const ConfirmationEmailView = ({ messageName, translations }) => (
    <div className="container-fluid flex flex-col pb-6 w-full">
      <p className="answer bg-gray-300 text-center">{translations.message[messageName]}</p>
      <hr className="self-center border-black mb-6 mt-6 w-64"/>
    <Button component={Link} style={{
        backgroundColor: "black",
        color: "white",
    }} variant="contained" className="profileButton" to="/profile">
      {translations.returnProfile}
    </Button>
    <Button component={Link}  variant="outlined" className="homeButton" to="/">
      {translations.returnHome}
    </Button>
  </div>
);
export default ConfirmationEmailView;
