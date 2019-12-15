import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

const ListsEditView = ({
  translations,
  GetSnackbar,
  EditSnackbar,
  formData,
  onSubmit,
  onChange,
  ChildrenComponent
}) => (
  <Grid container justify="center" className="mt-4">
    <GetSnackbar />
    <EditSnackbar />
    <Grid container justify="center">
      <Grid item>
        <Typography variant="h4" className="text-center">
          {translations.title}
        </Typography>
      </Grid>
    </Grid>
    <Grid xs={12} md={10} lg={8} item>
      <form onSubmit={onSubmit}>
        <Grid container direction="column" alignItems="center">
          <Grid xs={12} item>
            <ChildrenComponent formData={formData} onChange={onChange} />
          </Grid>
          <Grid xs={12} item className="mt-4">
            <Button variant="contained" color="primary" type="submit">
              {translations.editButton}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
);

export default ListsEditView;
