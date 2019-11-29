import React from 'react';
import { connect } from 'react-redux';

import BeautyTipsGetAllView from './BeautyTipsGetAll-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const BeautyTipsGetAllContainer = ({ language }) => <BeautyTipsGetAllView translations={translations[language]} />;

export default connect(mapStateToProps)(BeautyTipsGetAllContainer);
