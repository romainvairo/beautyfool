import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.scss';


const NavbarView = ({ translations }) => (
  <AppBar  className="toolbar hidden md:block" position="static">
    <Toolbar className="bg-gray-200">
      <div className="flex justify-start">
        <Link className="link">{translations.Home}</Link>
        <Link className="link">{translations.Actualities}</Link>
        <Link className="link">{translations.Services}</Link>
        <Link className="link">{translations.BeautyTips}</Link>
        <Link className="link">{translations.Gallery}</Link>
        <Link className="link">{translations.Presentation}</Link>
        <Link className="link">{translations.ContactUs}</Link>
      </div>
    </Toolbar>
  </AppBar>
);

export default NavbarView;
