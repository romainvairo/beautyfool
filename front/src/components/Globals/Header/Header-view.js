import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const HeaderView = ({ translations }) => (
  <header className="Header">
    <div className="Header-Logo">
      <Link to="/">
        <img src={require('../../../assets/images/logo.png')} alt="Logo" />
      </Link>
    </div>
    <p className="Header-Slogan">{translations.slogan}</p>
    <div className="Header-SocialNetworkLinks">
      <Link className="Header-SocialNetworkLinks-Link" to=""><i className="fab fa-facebook"></i></Link>
      <Link className="Header-SocialNetworkLinks-Link" to=""><i className="fab fa-twitter"></i></Link>
      <Link className="Header-SocialNetworkLinks-Link" to=""><i className="fab fa-instagram"></i></Link>
      <Link className="Header-SocialNetworkLinks-Link" to=""><i className="fas fa-share-alt"></i></Link>
    </div>
    <div className="Header-Login">
      <Link className="Header-Login-Link" to="/profile">
        <i className="fas fa-user"></i>{translations.login}
      </Link>
    </div>
  </header>
);

export default HeaderView;
