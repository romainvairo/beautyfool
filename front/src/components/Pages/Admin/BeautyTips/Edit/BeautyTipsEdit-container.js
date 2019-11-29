import React from 'react';
import { connect } from 'react-redux';

import BeautyTipsEditView from './BeautyTipsEdit-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const BeautyTipsEditContainer = ({ language }) => <BeautyTipsEditView translations={translations[language]} />;

export default connect(mapStateToProps)(BeautyTipsEditContainer);
