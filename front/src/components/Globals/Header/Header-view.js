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
      <a className="Header-SocialNetworkLinks-Link" href=""><i className="fab fa-facebook"></i></a>
      <a className="Header-SocialNetworkLinks-Link" href=""><i className="fab fa-twitter"></i></a>
      <a className="Header-SocialNetworkLinks-Link" href=""><i className="fab fa-instagram"></i></a>
      <a className="Header-SocialNetworkLinks-Link" href=""><i className="fas fa-share-alt"></i></a>
    </div>
    <div className="Header-Login">
      <Link className="Header-Login-Link" to="/profile">
        <i className="fas fa-user"></i>Mon Compte
      </Link>
    </div>
  </header>
);

export default HeaderView;
