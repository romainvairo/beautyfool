import React from 'react';
import './Header.scss';

const HeaderView = ({ translations }) => (
  <header className="Header">
    <div className="Header-Logo">
      <a href="">
        <img src={require('../../../assets/images/logo.png')} alt="Logo" />
      </a>
    </div>
    <p className="Header-Slogan">{translations.slogan}</p>
    <div className="Header-SocialNetworkLinks">
      <a className="Header-SocialNetworkLinks-Link" href=""><i className="fab fa-facebook"></i></a>
      <a className="Header-SocialNetworkLinks-Link" href=""><i className="fab fa-twitter"></i></a>
      <a className="Header-SocialNetworkLinks-Link" href=""><i className="fab fa-instagram"></i></a>
      <a className="Header-SocialNetworkLinks-Link" href=""><i className="fas fa-share-alt"></i></a>
    </div>
    <div className="Header-Login">
      <a className="Header-Login-Link" href="">
        <i className="fas fa-user"></i>Mon Compte
      </a>
    </div>
  </header>
);

export default HeaderView;
