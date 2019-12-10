import React from 'react';
import { connect } from 'react-redux';

import BenefitsView from './Benefits-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const BenefitsContainer = ({ language }) => <BenefitsView translations={translations[language]} />;

export default connect(mapStateToProps, null)(BenefitsContainer);
