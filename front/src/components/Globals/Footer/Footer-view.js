import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import './Footer.scss';

const FooterView = ({ translations, onCopy }) => (

  <footer>
    <Grid className="socialNetwork text-center">
      <a className="Header-SocialNetworkLinks-Link" rel="noopener noreferrer" target="_blank" href="https://facebook.com"><i className="fab fa-facebook"></i></a>
      <a className="Header-SocialNetworkLinks-Link" rel="noopener noreferrer" target="_blank" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
      <a className="Header-SocialNetworkLinks-Link" rel="noopener noreferrer" target="_blank" href="https://instagram.com"><i className="fab fa-instagram"></i></a>
      <a className="Header-SocialNetworkLinks-Link" rel="noopener noreferrer" onClick={onCopy} href="http://localhost"><i className="fas fa-share-alt"></i></a>
      <input id="empty-input" type="text" />
    </Grid>
    <Grid container justify="space-between" className="Footer text-center">
      <Grid xs={12} sm={6} md="auto" item>
        <Link className="p" to="/legal-notices">{ translations.LegalsMentions }</Link>
      </Grid>
      <Grid xs={12} sm={6} md="auto" item>
        <Link className="p" to="/terms-of-services">{ translations.TermsOfService }</Link>
      </Grid>
      <Grid xs={12} sm={6} md="auto" item>
        <Link className="p" to="/terms-of-sales">{ translations.TermsOfSalse }</Link>
      </Grid>
      <Grid xs={12} sm={6} md="auto" item>
        <Link className="p" to="/sitemap">{ translations.SiteMap }</Link>
      </Grid>
      <Grid xs={12} sm={6} md="auto" item>
        <Link className="p" to="/faq">{ translations.FAQ }</Link>
      </Grid>
      <Grid xs={12} sm={12} lg={2} item>
        <Link className="p" to="#">{ translations.Copyright }</Link>
      </Grid>
    </Grid>
  </footer>
);

export default FooterView;
