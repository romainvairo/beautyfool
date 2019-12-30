import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, FormControl, Select, InputLabel } from '@material-ui/core';

import './News.scss';

const NewsView = ({ translations, news, lastPage, page }) => (
  <>
    <Grid container justify="center">
      {/* <Grid container item justify="center">
        <Grid xs={6} lg={9} item className="text-center">
          <FormControl fullWidth variant="filled" className="w-64">
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
                <option value={20}>{translations.nails}</option>
                <option value={30}>{translations.hairRemoval}</option>
                <option value={30}>{translations.handsAndFeet}</option>
                <option value={30}>{translations.makeup}</option>
                <option value={30}>{translations.face}</option>
                <option value={30}>{translations.body}</option>
              </Select>
            </Grid>
          </FormControl>
        </Grid>
      </Grid> */}
      <Grid xs={12} lg={12} container item className="flex flex-row w-full mt-10 mb-10">
        {news.map((newA) => (
          <Grid key={newA.title} xs={12} lg={6} item className="news-section p-2">
            <img src={require("../../../assets/images/makeup_1.jpg")} alt="makeup_1"/>
            <h1 className="news-section-titles">{newA.title}</h1>
            <p className="news-section-contents">{newA.content}</p>
          </Grid>
        ))}
      </Grid>
      <div>
        <Link to={`/news/${page - 2}`} className="mx-1">
          {(page - 2) > 0 ? page - 2 : null}
        </Link>
        <Link to={`/news/${page - 1}`} className="mx-1">
          {(page - 1) > 0 ? page - 1 : null}
        </Link>
        <span className="mx-1">
          {page}
        </span>
        <Link to={`/news/${page + 1}`} className="mx-1">
          {(page + 1) <= lastPage ? page + 1 : null}
        </Link>
        <Link to={`/news/${page + 2}`} className="mx-1">
          {(page + 2) <= lastPage ? page + 2 : null}
        </Link>
      </div>
    </Grid>
  </>
);

export default NewsView;
