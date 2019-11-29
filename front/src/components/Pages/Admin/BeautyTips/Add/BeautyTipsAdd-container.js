import React from 'react';
import { connect } from 'react-redux';

import BeautyTipsAddView from './BeautyTipsAdd-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const BeautyTipsAddContainer = ({ language }) => <BeautyTipsAddView translations={translations[language]} />;

export default connect(mapStateToProps)(BeautyTipsAddContainer);
