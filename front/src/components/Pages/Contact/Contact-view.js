import React from 'react';
import { Grid, Button, TextField, Typography } from '@material-ui/core';

import './'

const ContactView = ({ translations }) => (
  <Grid container xs={12} lg={12} className="flex">
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
          <form className="w-full">
            <Grid item className="flex mt-4">
              <TextField fullWidth id="standard-basic" label={translations.name}/>
            </Grid>
            <Grid item className="flex mt-4">
              <TextField fullWidth id="standard-basic" label={translations.email} />
            </Grid>
            <Grid item className="flex  mt-4">
              <TextField fullWidth id="standard-basic" label={translations.subject} />
            </Grid>
            <Grid item className="flex mt-8">
               <TextField
          fullWidth
          id="filled-multiline-static"
          label={translations.message}
          multiline
          rows="4"
          defaultValue=""
          variant="filled"
        />
            </Grid>
            <Grid item className="flex justify-center mt-8 mb-6">
              <Button variant="contained">{translations.send}</Button>
            </Grid>

          </form>
          </Grid>
          </Grid>
        </Grid>
    </Grid>
  </Grid>
);

export default ContactView;
