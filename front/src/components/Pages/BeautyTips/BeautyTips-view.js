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
      <Grid xs={12} lg={12} container item className="flex flex-row w-full mt-10 mb-10">
        {beautyTips.map((beautyTip) => (
        <Grid key={beautyTip.title} xs={12} lg={4} item className="beautyTips-section p-2">
          <img src={require("../../../assets/images/makeup_1.jpg")} alt="makeup"/>
          <h1 className="beautyTips-section-titles">{beautyTip.title}</h1>
            <p className="beautyTips-section-contents">{beautyTip.content}</p>
            <Link to="#" className="beautyTips-section-link">Lire la suite</Link>
        </Grid>
        ))}
      </Grid>
    </Grid>
  </>
);

export default BeautyTipsView;
