import React from 'react';
import { Grid, TextField, Button, Select, MenuItem, Typography } from '@material-ui/core';

import './SearchOptionsPanel.scss'

const SearchOptionsPanelView = ({ translations, search, onChange, order }) => (
  <Grid xs={1} md={4} item className="SearchOptionsPanel md-block">
    <Grid container className="h-full" justify="flex-end">
      <Grid container item className="py-2 px-4 bg bg-gray-lighter-2 h-full">
        <Grid xs={12} item className="fixed z-10">
          <Typography variant="h5">{translations.title}</Typography>
          <Grid container className="my-3">
            <Grid xs={8} container item>
              <TextField
                placeholder="Type here to search"
                className="text-field grouped shadow"
                variant="outlined"
                value={search}
                onChange={onChange('search')}
              />
            </Grid>
            <Grid xs={4} container item>
              <Button variant="contained" className="px-3 bg-gray-lighter-3 rounded-l-none shadow">{translations.search}</Button>
            </Grid>
          </Grid>
          <Typography variant="h6">{translations.sortCriteria.title}</Typography>
          <Grid container className="mt-1">
            <span className="mr-2 mt-2">{translations.sortCriteria.order}:</span>
            <Grid xs={5} item>
              <Select
                className="text-field shadow"
                variant="outlined"
                value={order}
                onChange={onChange('order')}
                fullWidth
              >
                <MenuItem value="1">{translations.sortCriteria.ascending}</MenuItem>
                <MenuItem value="-1">{translations.sortCriteria.descending}</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default SearchOptionsPanelView;
