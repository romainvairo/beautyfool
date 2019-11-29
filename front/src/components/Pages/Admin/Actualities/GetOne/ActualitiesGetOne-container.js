import React from 'react';
import { connect } from 'react-redux';

import ActualitiesGetOneView from './ActualitiesGetOne-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ActualitiesGetOneContainer = ({ language }) => <ActualitiesGetOneView translations={translations[language]} />;

export default connect(mapStateToProps)(ActualitiesGetOneContainer);
