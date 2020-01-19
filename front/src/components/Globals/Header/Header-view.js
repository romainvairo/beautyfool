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
      <Grid xs={3} sm={4} item>
        <div className="">
          {
            isToggle
              ? <DropdownInterface onClose={setIsToggle} />
              : <DropdownButton onClick={setIsToggle} />
          }
        </div>
      </Grid>
      <Grid xs={6} sm={4} container item alignItems="center" direction="column" className="Header-Logo">
        <Grid item>
          <Link to="/">
            <img className="header-logo-image" src={require('../../../assets/images/Logo_2.png')} alt="Logo_2" />
          </Link>
        </Grid>
      </Grid>
      <Grid xs={3} sm={4} container item justify="flex-end" className="mt-6 leading-loose">
        <Grid item sm={0}>
          {
            isAdmin ? <AdminButton /> : null
          }

        </Grid>
        <Grid item sm={3} className="font-bold ml-2">
          <ProfileButton />
        </Grid>
      </Grid>
    </Grid>
  </header>
);

export default HeaderView;
