import React from 'react';
import { Grid, Typography, Button, List, ListItem, ListItemText, Checkbox, ListItemIcon, TextField, Input } from '@material-ui/core';

import './EditProfile.scss';

const EditProfileView = ({ translations, user}) => (
  <>
    <div className="contain">
      <div className="pic">
        <img className="image" src={user.picture}/>
          <div className="image-button">
            <Button className="button-modification" variant="contained">
              {translations.editProfilePicture}
            </Button>
          </div>
        </div>
    <div className="list">
      <div className="input-item">
        <div className="items" >
          <TextField fullWidth label={translations.lastName} InputLabelProps={{ shrink: true }} placeholder={user.lastname}/>
        </div>
        <div className="items" >
        <TextField fullWidth className="items" label={translations.firstName} InputLabelProps={{ shrink: true }} placeholder={user.firstname}/>
        </div>
        <div className="items" >
        <TextField fullWidth className="items" label={translations.userName} InputLabelProps={{ shrink: true }} placeholder={user.username}/>
        </div>
        <div className="items" >
        <TextField fullWidth className="items" label={translations.address} fullWidth multiline InputLabelProps={{ shrink: true }} placeholder={user.address}/>
        </div>
        <div className="items" >
        <TextField fullWidth className="items" label={translations.zipcode} InputLabelProps={{ shrink: true }} placeholder={user.zipcode}/>
        </div>
        <div className="items" >
        <TextField fullWidth className="items" label={translations.city} InputLabelProps={{ shrink: true }} placeholder={user.city}/>
        </div>
        <div className="items" >
        <TextField fullWidth className="items" label={translations.birthdate} InputLabelProps={{ shrink: true }} placeholder={user.birthdate}/>
        </div>
        <div className="items" >
        <TextField fullWidth className="item" label={translations.email} InputLabelProps={{ shrink: true }} placeholder={user.email}/>
        </div>


        <Button className="items" variant="contained" color="secondary">
          {translations.send}
        </Button>
        </div>
      </div>
    </div>
    </>
);

export default EditProfileView;
