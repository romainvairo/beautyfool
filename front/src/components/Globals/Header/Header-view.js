import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper} from '@material-ui/core';

import './Header.scss';
import Dropdown from './Dropdown';

const HeaderView = ({ translations }) => (
<<<<<<< HEAD
  <header className="Header">
=======
  <header>
>>>>>>> romain
    <Grid container justify="space-between">
      <Grid xs={3} sm={2} item>
        <Dropdown />
      </Grid>
      <Grid xs={6} sm={8} container item alignItems="center" direction="column" className="Header-Logo">
        <Grid item>
          <Link to="/">
<<<<<<< HEAD
            <img className="Header-Logo" src={require('../../../assets/images/logo.png')} alt="Logo" />
=======
            <img src={require('../../../assets/images/logo.png')} alt="Logo" />
>>>>>>> romain
          </Link>
        </Grid>
        <Grid item>
          <p className="Header-Slogan">{translations.slogan}</p>
        </Grid>
      </Grid>
      <Grid xs={3} sm={2} container item justify="flex-end">
        <Grid item className="pr-2">
<<<<<<< HEAD
          <Link className="Header-Login" to="/profile">
=======
          <Link className="Header-Login-Link" to="/profile">
>>>>>>> romain
            <i className="fas fa-user block text-center"></i>
            <span className="block text-center text-xs">
              Mon compte
            </span>
          </Link>
        </Grid>
      </Grid>
    </Grid>
<<<<<<< HEAD
=======
    <div className="Header-SocialNetworkLinks hidden md:block">
      <Link className="Header-SocialNetworkLinks-Link" to=""><i className="fab fa-facebook"></i></Link>
      <Link className="Header-SocialNetworkLinks-Link" to=""><i className="fab fa-twitter"></i></Link>
      <Link className="Header-SocialNetworkLinks-Link" to=""><i className="fab fa-instagram"></i></Link>
      <Link className="Header-SocialNetworkLinks-Link" to=""><i className="fas fa-share-alt"></i></Link>
    </div>
>>>>>>> romain
  </header>
);

export default HeaderView;
