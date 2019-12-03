import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid, Typography, FormControl, Select, InputLabel } from '@material-ui/core';

const NewsView = ({ translations }) => (
  <Grid container justify="center">
    <Grid item className="mt-6 mb-6">
      <Typography variant="h4">{ translations.title }</Typography>
    </Grid>
    <Grid container item justify="center">
      <Grid xs={6} lg={9} item>
        <FormControl fullWidth variant="filled">
          <Grid item container>
            <InputLabel>Categorie</InputLabel>
              <Select
                fullWidth
                native
                inputProps={{
                  name: 'Category',
                  id: 'filled-age-native-simple',
                }}
              >
                <option value={translations.category} />
                <option value={10}></option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
    <Grid xs={6} lg={9} container item spacing={2} className="mt-10 mb-10">
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
      <Grid xs={6} md={4} item>
        <img src={require("../../../assets/images/makeup_1.jpg")}/>
      </Grid>
    </Grid>
  </Grid>

);

export default NewsView;
