import React from 'react';
import { connect } from 'react-redux';

import BeautyTipsGetOneView from './BeautyTipsGetOne-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const BeautyTipsGetOneContainer = ({ language }) => <BeautyTipsGetOneView translations={translations[language]} />;

export default connect(mapStateToProps)(BeautyTipsGetOneContainer);
