import React from 'react';
import { connect } from 'react-redux';

import BenefitsAddView from './BenefitsAdd-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const BenefitsAddContainer = ({ language }) => <BenefitsAddView translations={translations[language]} />;

export default connect(mapStateToProps)(BenefitsAddContainer);
