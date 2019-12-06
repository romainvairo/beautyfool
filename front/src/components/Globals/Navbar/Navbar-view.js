import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.scss';


const NavbarView = ({ translations }) => (
  <AppBar  className="toolbar hidden md:block" position="static">
    <Toolbar className="bg-red-800 pl-20" component="div">
      <Grid container justify="space-around">
        <Grid item>
          <Link className="link">{translations.Home}</Link>
        </Grid>
        <Grid item>
          <Link className="link">{translations.Actualities}</Link>
        </Grid>
        <Grid item>
          <Link className="link">{translations.Services}</Link>
        </Grid>
        <Grid item>
          <Link className="link">{translations.BeautyTips}</Link>
        </Grid>
        <Grid item>
          <Link className="link">{translations.Gallery}</Link>
        </Grid>
        <Grid item>
          <Link className="link">{translations.Presentation}</Link>
        </Grid>
        <Grid item>
          <Link className="link">{translations.ContactUs}</Link>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavbarView;
