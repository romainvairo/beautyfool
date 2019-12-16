import React from 'react';
import { Link } from 'react-router-dom';
import {Grid, Typography, FormControl, Select, InputLabel } from '@material-ui/core';

import './BeautyTips.scss';

const BeautyTipsView = ({ translations, beautyTips }) => (
  <>
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
                <option value={10}>{translations.nails}</option>
                <option value={30}>{translations.hairRemoval}</option>
                <option value={30}>{translations.handsAndFeet}</option>
                <option value={30}>{translations.makeup}</option>
                <option value={20}>{translations.face}</option>
                <option value={30}>{translations.body}</option>
              </Select>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
    <Grid xs={12} lg={12} container item spacing={2} className="mt-10 mb-10">
      {beautyTips.map((beautyTip) => (
        <div>
          <Grid key={beautyTip} xs={6} md={4} item>
            <img src={require("../../../assets/images/makeup_1.jpg")}/>
            <h1>{beautyTip.title}</h1>
            <p>{beautyTip.content}</p>
          </Grid>
        </div>
      ))}
    </Grid>
  </>
);

export default BeautyTipsView;
