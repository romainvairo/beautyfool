import React from 'react';
import { connect } from 'react-redux';

import ActualitiesEditView from './ActualitiesEdit-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ActualitiesEditContainer = ({ language }) => <ActualitiesEditView translations={translations[language]} />;

export default connect(mapStateToProps)(ActualitiesEditContainer);
