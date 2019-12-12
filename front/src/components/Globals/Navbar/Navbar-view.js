import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.scss';


const NavbarView = ({ translations }) => (
  <AppBar  className="toolbar hidden md:block" position="static">
    <Toolbar className="bg-pink-700 pl-20" component="div">
      <Grid container justify="space-around">
        <Link to="/" className="link">{translations.Home}</Link>
        <Link to="/news" className="link">{translations.Actualities}</Link>
        <Link to="/benefits" className="link">{translations.Services}</Link>
        <Link to="/beauty-tips" className="link">{translations.BeautyTips}</Link>
        <Link to="/gallery" className="link">{translations.Gallery}</Link>
        <Link to="/presentation" className="link">{translations.Presentation}</Link>
        <Link to="/contact" className="link">{translations.ContactUs}</Link>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavbarView;
