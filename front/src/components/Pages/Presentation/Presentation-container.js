import React from 'react';
import { connect } from 'react-redux';

import PresentationView from './Presentation-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const PresentationContainer = ({ language }) =>
  <PresentationView translations={translations[language]} />;

export default connect(mapStateToProps)(PresentationContainer);
