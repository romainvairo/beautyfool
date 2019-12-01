import React from 'react';
import { connect } from 'react-redux';

import SitemapView from './Sitemap-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const SitemapContainer = ({ language }) =>
  <SitemapView translations={translations[language]} />;

export default connect(mapStateToProps)(SitemapContainer);
