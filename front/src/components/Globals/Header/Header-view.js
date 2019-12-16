import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper} from '@material-ui/core';

import './Header.scss';
import DropdownButton from './DropdownButton';
import DropdownInterface from './DropdownInterface';

const HeaderView = ({ translations, isToggle, setIsToggle}) => (
  <header className="Header">
    <Grid container justify="space-between">
      <Grid xs={3} sm={2} item>
        <div className="">
    {
      isToggle
        ? <DropdownInterface onClose={setIsToggle} />
        : <DropdownButton onClick={setIsToggle} />
    }
  </div>
      </Grid>
      <Grid xs={6} sm={8} container item alignItems="center" direction="column" className="Header-Logo">
        <Grid item>
          <Link to="/">
            <img src={require('../../../assets/images/logo.png')} alt="Logo" />
          </Link>
        </Grid>
      </Grid>
      <Grid xs={3} sm={2} container item justify="flex-end">
        <Grid item className="pr-2">
          <Link to="#" className="Header-Login-Link" to="/profile">
            <i className="fas fa-user block text-center"></i>
            <span className="block text-center text-xs">
              Mon compte
            </span>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </header>
);

export default HeaderView;
