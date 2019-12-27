import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const NewsletterView = ({ subject, message, onChange, onSubmit }) => (
  <Grid container justify="center">
    <Grid xs={12} sm={11} md={10} item>
      <form className="w-full" onSubmit={onSubmit}>
        <TextField
          fullWidth
          label="subject"
          value={subject}
          variant="outlined"
          onChange={onChange('subject')}
        />
        <TextField
          fullWidth
          multiline
          label="message"
          value={message}
          variant="outlined"
          onChange={onChange('message')}
        />

        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </form>
    </Grid>
  </Grid>
);

export default NewsletterView;
