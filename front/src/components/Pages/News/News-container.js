import React from 'react';
import { connect } from 'react-redux';

import NewsView from './News-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const NewsContainer = ({ language }) =>
  <NewsView translations={translations[language]} />;

export default connect(mapStateToProps)(NewsContainer);
