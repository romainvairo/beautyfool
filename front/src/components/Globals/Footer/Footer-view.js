import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid } from '@material-ui/core';

import './Footer.scss';

const FooterView = ({ translations }) => (

  <footer>
    <Grid className="socialNetwork" align="center">
      <Link className="Header-SocialNetworkLinks-Link" target="_blank" to=""><i className="fab fa-facebook"></i></Link>
      <Link className="Header-SocialNetworkLinks-Link" target="_blank" to=""><i className="fab fa-twitter"></i></Link>
      <Link className="Header-SocialNetworkLinks-Link" target="_blank" to=""><i className="fab fa-instagram"></i></Link>
      <Link className="Header-SocialNetworkLinks-Link" target="_blank" to=""><i className="fas fa-share-alt"></i></Link>
    </Grid>
    <Grid container justify="space-between" className="Footer text-center">
      <Grid xs={12} sm={6} md="auto" item>
        <Link className="p" to="#">{ translations.LegalsMentions }</Link>
      </Grid>
      <Grid xs={12} sm={6} md="auto" item>
        <Link className="p" to="#">{ translations.TermsOfService }</Link>
      </Grid>
      <Grid xs={12} sm={6} md="auto" item>
        <Link className="p" to="#">{ translations.TermsOfSalse }</Link>
      </Grid>
      <Grid xs={12} sm={6} md="auto" item>
        <Link className="p" to="#">{ translations.SiteMap }</Link>
      </Grid>
      <Grid xs={12} sm={6} md="auto" item>
        <Link className="p" to="#">{ translations.FAQ }</Link>
      </Grid>
      <Grid xs={12} item>
        <Link className="p" to="#">{ translations.Copyright }</Link>
      </Grid>
    </Grid>
  </footer>
);

export default FooterView;
