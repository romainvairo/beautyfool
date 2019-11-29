import React from 'react';

import './Header.scss';

const HeaderView = ({ translations }) => (
  <header className="Header">
    <ul className="burger">
      <li className="burger">hey</li>
      <li>hi</li>
      <li>moune</li>
      <li>miam</li>
      <li>miou</li>
      <li>ajouka</li>
      <li>aboook</li>
      <li>riahanna</li>
    </ul>
    <div className="Header-Logo">
      <img src={require('../../../assets/images/logo.png')} alt="Logo" />
    </div>
    <p>Slogan</p>
    <div className="Header-SocialNetworkLinks">
      <i className="fab fa-facebook"></i>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-share-alt"></i>
    </div>
  </header>
);

export default HeaderView;
