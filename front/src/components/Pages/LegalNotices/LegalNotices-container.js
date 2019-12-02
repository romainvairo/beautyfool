import React from 'react';
import { connect } from 'react-redux';

import LegalNoticesView from './LegalNotices-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const LegalNoticesContainer = ({ language }) =>
  <LegalNoticesView translations={translations[language]} />;

export default connect(mapStateToProps)(LegalNoticesContainer);
