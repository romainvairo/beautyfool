import React from 'react';
import { Link } from 'react-router-dom';

import './ProfileButton.scss';

const ProfileButtonView = ({ translations, isLogged }) => {
  return isLogged
    ? (
      <Link className="Header-Login-Link font-bold" to="/profile">
        <i className="fas fa-user block text-center"></i>
        <span className="block text-center text-xs">
          {translations.logged}
        </span>
      </Link>
    )
    : (
      <Link className="Header-Login-Link font-bold" to="/login">
        <i className="far fa-user block text-center"></i>
        <span className="block text-center text-xs">
          {translations.login}
        </span>
      </Link>
    );
}

export default ProfileButtonView;
