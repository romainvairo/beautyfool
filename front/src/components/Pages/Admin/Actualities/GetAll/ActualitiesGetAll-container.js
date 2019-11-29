import React from 'react';
import { connect } from 'react-redux';

import ActualitiesGetAllView from './ActualitiesGetAll-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ActualitiesGetAllContainer = ({ language }) => <ActualitiesGetAllView translations={translations[language]} />;

export default connect(mapStateToProps)(ActualitiesGetAllContainer);
