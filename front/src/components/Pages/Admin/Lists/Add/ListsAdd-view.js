import React from 'react';
import { Grid } from '@material-ui/core';

const ListsAddView = ({
  translations,
  AddSnackbar,
  formData,
  onSubmit,
  onChange,
  ChildrenComponent
}) => (
  <Grid container justify="center">
    <AddSnackbar />
    <Grid xs={12} md={10} lg={8} item>
      <form onSubmit={onSubmit}>
        <ChildrenComponent formData={formData} onChange={onChange} />
      </form>
    </Grid>
  </Grid>
);

export default ListsAddView;
