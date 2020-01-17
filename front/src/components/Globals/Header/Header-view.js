import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import './Header.scss';
import DropdownButton from './DropdownButton';
import DropdownInterface from './DropdownInterface';
import ProfileButton from './ProfileButton';
import AdminButton from './AdminButton';

const HeaderView = ({ translations, isToggle, setIsToggle, isAdmin }) => (
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
            <img className="header-logo-image" src={require('../../../assets/images/Logo_2.png')} alt="Logo_2" />
          </Link>
        </Grid>
      </Grid>
      <Grid xs={3} sm={2} container item justify="flex-end">
        <Grid item>
          {
            isAdmin ? <AdminButton /> : null
          }

        </Grid>
        <Grid item className="m-6 font-bold">
          <ProfileButton />
        </Grid>
      </Grid>
    </Grid>
  </header>
);

export default HeaderView;
