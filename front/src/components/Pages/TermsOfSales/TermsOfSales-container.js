import React from 'react';
import { connect } from 'react-redux';

import TermsOfSalesView from './TermsOfSales-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const TermsOfSalesContainer = ({ language }) =>
  <TermsOfSalesView translations={translations[language]} />;

export default connect(mapStateToProps)(TermsOfSalesContainer);
