import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, List, ListItem, ListItemText } from '@material-ui/core';

import ProfileCarousel from './ProfileCarousel';
import Checkbox from '../../Shared/Checkbox';
import 'react-alice-carousel/lib/alice-carousel.css';

const ProfileView = ({ translations, isNewsletterChecked, onToggle, user, onDelete, onLogout, appointments }) => (
  <Grid container>
    <Grid container lg={12} item>
      <Grid container xs={12} item className="justify-center">
        <Grid item lg={4} className="mt-12">
          <Grid xs={12} container item className="flex justify-center">
            <Grid xs={12} item className="flex justify-center">
              <div>
                <img
                  className="w-64 h-64 rounded-full"
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
                <ListItemText primary={translations.lastname} secondary={user.lastname} />
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.firstname} secondary={user.firstname} />
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.username} secondary={user.username}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.address} secondary={user.address}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.zipCode} secondary={user.zipcode}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.city} secondary={user.city}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.birthdate} secondary={user.birthdate}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.phone} secondary={user.phone}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.email} secondary={user.email}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.fidelityPoints} secondary={user.fidelity}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={translations.appointments}/>
              </ListItem>
              <ListItem>
                <ProfileCarousel appointments={appointments}/>
              </ListItem>
              <Grid lg={12} item container className="flex justify-start mt-10 mb-6">
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
                    <Grid xs={12} item className="flex mt-4">
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
