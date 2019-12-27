import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, List, ListItem, ListItemText } from '@material-ui/core';

import ProfileCarousel from './ProfileCarousel';
import Checkbox from '../../Shared/Checkbox';
import 'react-alice-carousel/lib/alice-carousel.css';

const ProfileView = ({ translations, isNewsletterChecked, onToggle, user, onDelete, onLogout }) => (
  <Grid container>
    <Grid container lg={12} item>
      <Grid container xs={12} item className="justify-center">
        <Grid item lg={4} className="mt-12">
          <Grid xs={12} container item className="flex justify-center">
            <Grid xs={12} item className="flex justify-center">
              <div>
                <img
                  className="rounded-full h-32 w-32"
                  src={user.picture || require('../../../assets/images/makeup_1.jpg')}
                  alt="makeup_1"
                />
              </div>
            </Grid>
            <Grid xs={12} item className="flex justify-center mt-6">
              <Button onClick={onLogout} variant="contained" color="secondary">
                {translations.logout}
              </Button>
            </Grid>
            <Grid xs={12} item className="flex justify-center mt-2">
              <Button component={Link} to="/profile/edit" variant="contained">
                {translations.updateAccount}
              </Button>
            </Grid>
          </Grid>
        </Grid>
          <Grid lg={6} item className="flex mt-12">
            <Grid xs={12} item className="flex justify-center">
            <List>
              <ListItem>
                <ListItemText primary={translations.lastname} secondary="Dupont" />
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.firstname} secondary="Henri" />
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.username} secondary="Henri IV"/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.address} secondary="56 av des champs élysées"/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.zipCode} secondary="75000"/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.city} secondary="Paris"/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.birthdate} secondary="15/06/1957"/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.email} secondary="dupont.henri@free.fr"/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.fidelityPoints} secondary="22 points"/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.appointments}/>
              </ListItem>
              <ListItem>
                <ProfileCarousel appointments={user.appointments}/>
              </ListItem>
              <Grid lg={12} item container className="flex justify-start mt-40 mb-6">
                <Grid xs={12} container item className="flex justify-center">
                  <Grid item className="flex">
                    <ListItem>
                      <Checkbox
                        onChange={onToggle}
                        label={translations.newsletters}
                        checked={isNewsletterChecked}
                      />
                    </ListItem>
                  </Grid>
                  <Grid className="flex">
                    <Grid xs={12} item className="flex">
                      <Button onClick={onDelete} variant="contained" color="secondary">
                        {translations.deleteAccount}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default ProfileView;
