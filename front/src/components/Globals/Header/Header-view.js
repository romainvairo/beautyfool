import React from 'react';
import './Header.scss';

const HeaderView = ({ translations }) => (
  <header className="Header">
    <div className="Header-Logo">
      <img src={require('../../../assets/images/logo.png')} alt="Logo" />
    </div>
    <p className="Header-Slogan">{translations.slogan}</p>
    <div className="Header-SocialNetworkLinks">
      <i className="fab fa-facebook"></i>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram"></i>
      <i className="fas fa-share-alt"></i>
    </div>
    <div className="Header-Login">
      <a className="Header-Login-Link" href="">
        <i className="fas fa-user"></i>Mon Compte
      </a>
    </div>
  </header>
);

export default HeaderView;
