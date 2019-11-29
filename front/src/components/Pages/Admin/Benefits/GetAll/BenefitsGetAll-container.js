import React from 'react';
import { connect } from 'react-redux';

import BenefitsGetAllView from './BenefitsGetAll-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const BenefitsGetAllContainer = ({ language }) => <BenefitsGetAllView translations={translations[language]} />;

export default connect(mapStateToProps)(BenefitsGetAllContainer);
