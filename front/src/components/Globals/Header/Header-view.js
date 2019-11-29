import React from 'react';

const HeaderView = ({ translations }) => (
  <header className="Header">
    <div className="Header-Logo">
      <img src={require('../../../assets/images/logo.png')} alt="Logo" />
    </div>
    <p>Slogan</p>
    <div className="Header-SocialNetworkLinks">
      <i className="fab fa-facebook"></i>
    </div>
  </header>
);

export default HeaderView;