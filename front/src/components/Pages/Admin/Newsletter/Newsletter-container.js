import React from 'react';
import { connect } from 'react-redux';

import NewsletterView from './Newsletter-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const NewsletterContainer = ({ language }) => <NewsletterView translations={translations[language]} />;

export default connect(mapStateToProps)(NewsletterContainer);
