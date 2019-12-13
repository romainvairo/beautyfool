import React from 'react';
import { Grid } from '@material-ui/core';

const ListsEditView = ({
  translations,
  GetSnackbar,
  EditSnackbar,
  formData,
  onSubmit,
  onChange,
  ChildrenComponent
}) => (
  <Grid container justify="center">
    <GetSnackbar />
    <EditSnackbar />
    <Grid xs={12} md={10} lg={8} item>
      <form onSubmit={onSubmit}>
        <ChildrenComponent formData={formData} onChange={onChange} />
      </form>
    </Grid>
  </Grid>
);

export default ListsEditView;
