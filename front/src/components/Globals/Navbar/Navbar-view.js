import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.scss';


const NavbarView = ({ translations }) => (

  <div className="nav">
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">{translations.Home}</Button>
        <Button color="inherit">{translations.Actualities}</Button>
        <Button color="inherit">{translations.Services}</Button>
        <Button color="inherit">{translations.BeautyTips}</Button>
        <Button color="inherit">{translations.Gallery}</Button>
        <Button color="inherit">{translations.Presentation}</Button>
        <Button color="inherit">{translations.ContactUs}</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default NavbarView;
