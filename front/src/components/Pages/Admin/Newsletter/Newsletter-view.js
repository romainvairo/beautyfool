import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

import './Newsletter.scss';

const NewsletterView = ({ subject, message, onChange, onSubmit, translations }) => (
  <Grid container justify="center" className="flex">
    <Grid xs={12} sm={11} md={10} item>
      <form className="w-full text-center mt-48 mb-48" onSubmit={onSubmit}>
        <TextField
          className="mt-4"
          fullWidth
          label={translations.subject}
          value={subject}
          variant="outlined"
          onChange={onChange('subject')}
        />
        <TextField
          className="mt-4"
          fullWidth
          multiline
          label={"message"}
          value={message}
          variant="outlined"
          onChange={onChange('message')}
        />

        <Button type="submit" variant="contained" color="secondary" className="mt-12">
          {translations.send}
        </Button>
      </form>
    </Grid>
  </Grid>
);

export default NewsletterView;
