import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import './Header.scss';
import DropdownButton from './DropdownButton';
import DropdownInterface from './DropdownInterface';
import ProfileButton from './ProfileButton';

const HeaderView = ({ translations, isToggle, setIsToggle }) => (
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
          <ProfileButton />
        </Grid>
      </Grid>
    </Grid>
  </header>
);

export default HeaderView;
