import React from 'react';
import { connect } from 'react-redux';

import FAQView from './FAQ-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const FAQContainer = ({ language }) =>
  <FAQView translations={translations[language]} />;

export default connect(mapStateToProps)(FAQContainer);
