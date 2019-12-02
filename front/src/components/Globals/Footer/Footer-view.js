import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

import './Footer.scss';

const FooterView = ({ translations }) => (
  <footer className="Footer">
    <Link className="p" to="#">{ translations.LegalsMentions }</Link><br/>
    <Link className="p" to="#">{ translations.TermsOfService}</Link><br/>
    <Link className="p" to="#">{ translations.TermsOfSalse }</Link><br/>
    <Link className="p" to="#">{ translations.SiteMap}</Link><br/>
    <Link className="p" to="#">{ translations.FAQ}</Link><br/>
    <Link className="p" to="#">{ translations.Copyright}</Link><br/>

  </footer>
);

export default FooterView;
