import React from 'react';
import { connect } from 'react-redux';

import BenefitsGetOneView from './BenefitsGetOne-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const BenefitsGetOneContainer = ({ language }) => <BenefitsGetOneView translations={translations[language]} />;

export default connect(mapStateToProps)(BenefitsGetOneContainer);
