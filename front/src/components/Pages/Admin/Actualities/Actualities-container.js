import React from 'react';
import { connect } from 'react-redux';

import ActualitiesView from './Actualities-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ActualitiesContainer = ({ language }) => <ActualitiesView translations={translations[language]} />;

export default connect(mapStateToProps)(ActualitiesContainer);
