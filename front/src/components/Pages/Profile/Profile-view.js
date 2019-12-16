import React from 'react';
import { Grid, Button, List, ListItem, ListItemText, Checkbox, ListItemIcon } from '@material-ui/core';
import ProfileCarouselView from './ProfileCarousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ProfileView = ({ translations, images }) => (
  <Grid container>
    <Grid container lg={12} >
      <Grid container xs={12} className="justify-center">
        <Grid item lg={4} className="mt-12">
          <Grid xs={12} container item className="flex justify-center">
            <Grid xs={12} item className="flex justify-center">
              <div><img className="rounded-full h-32 w-32" src={require('../../../assets/images/body_1.jpg')} /></div>
            </Grid>
            <Grid xs={12} item className="flex justify-center mt-6">
              <Button variant="contained" color="secondary">
                {translations.logout}
              </Button>
            </Grid>
            <Grid xs={12} item className="flex justify-center mt-2">
              <Button variant="contained">
                {translations.updateAccount}
              </Button>
            </Grid>
          </Grid>
        </Grid>
          <Grid lg={6} className="flex mt-12">
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
              <ProfileCarouselView />
              </ListItem>
              <Grid lg={12} container className="flex justify-start mt-40 mb-6">
              <Grid xs={12} container item className="flex justify-center">
              <Grid item className="flex">
              <ListItem >
                    <ListItemIcon>
                      <Checkbox

                      />
                    </ListItemIcon>
                    <ListItemText primary={translations.newsletters} />
                  </ListItem>
                  </Grid>
                  <Grid className="flex">
                  <Grid xs={12} item className="flex">
            <Button variant="contained" color="secondary">
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
