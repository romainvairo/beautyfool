import React from 'react';
import { Grid, Button, TextField, Typography } from '@material-ui/core';

import './'

const ContactView = ({ translations, name, email, subject, message, onChange, onSubmit, feedbackMessage }) => (
  <Grid container item xs={12} lg={12} className="flex contact">
    <Grid xs={12} item className="flex pl-4 pt-8 font-black">
      <Grid lg={12} item className="flex justify-center pt-8 font-black">
        <Typography variant="h4" className="flex text-center text-base lg:text-3xl font-black">
          {translations.title}
        </Typography>
      </Grid>
    </Grid>

    <Grid xs={12} item className="flex justify-center">
      <Grid lg={12} item className="flex mt-20 justify-center">
        <Grid xs={12} item className="flex justify-center">
          <Grid lg={6} item className="flex">
            <form onSubmit={onSubmit} className="w-full">
              <Grid item className="flex mt-4">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label={translations.name}
                  onChange={onChange('name')}
                  value={name}
                />
              </Grid>
              <Grid item className="flex mt-4">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label={translations.email}
                  onChange={onChange('email')}
                  value={email}
                />
              </Grid>
              <Grid item className="flex  mt-4">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label={translations.subject}
                  onChange={onChange('subject')}
                  value={subject}
                />
              </Grid>
              <Grid item className="flex mt-8">
                <TextField
                  fullWidth
                  id="filled-multiline-static"
                  label={translations.message}
                  onChange={onChange('message')}
                  value={message}
                  multiline
                  rows="4"
                  variant="filled"
                />
              </Grid>
              <Grid item className="flex justify-center mt-8 mb-6">
                <Button variant="contained">{translations.send}</Button>
              </Grid>
              {feedbackMessage}

            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default ContactView;
