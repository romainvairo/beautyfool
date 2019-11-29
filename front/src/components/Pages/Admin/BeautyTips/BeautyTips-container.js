import React from 'react';
import { connect } from 'react-redux';

import BeautyTipsView from './BeautyTips-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const BeautyTipsContainer = ({ language }) => <BeautyTipsView translations={translations[language]} />;

export default connect(mapStateToProps)(BeautyTipsContainer);
