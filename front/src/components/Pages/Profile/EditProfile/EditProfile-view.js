import React from 'react';
import { Grid, Typography, Button, List, ListItem, ListItemText, Checkbox, ListItemIcon, TextField, Input } from '@material-ui/core';

import './EditProfile.scss';

const EditProfileView = ({ translations }) => (
  <div className="container">
    <section className="container-image">
      <img src={require('../../../../assets/images/body_1.jpg')}/>
    </section>
  </div>
);

export default EditProfileView;
