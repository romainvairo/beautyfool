import React from 'react';
import { connect } from 'react-redux';

import BenefitsEditView from './BenefitsEdit-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const BenefitsEditContainer = ({ language }) => <BenefitsEditView translations={translations[language]} />;

export default connect(mapStateToProps)(BenefitsEditContainer);
