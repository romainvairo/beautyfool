import React from 'react';
import { connect } from 'react-redux';

import TermsOfServicesView from './TermsOfServices-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const TermsOfServicesContainer = ({ language }) =>
  <TermsOfServicesView translations={translations[language]} />;

export default connect(mapStateToProps)(TermsOfServicesContainer);
