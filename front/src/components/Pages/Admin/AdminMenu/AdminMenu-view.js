import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';

import './AdminMenu.scss';

const AdminMenuView = ({ translations, menuData }) => menuData.map(menuData => (
  <Grid key={menuData} xs={12} sm={6} md={4} item className="menu-item">
    <Button
      component={Link}
      variant="contained"
      color="primary"
      className="menu-button w-full"
      to={translations[menuData].link}
    >
      {translations[menuData].content}
    </Button>
  </Grid>
));

export default AdminMenuView;
