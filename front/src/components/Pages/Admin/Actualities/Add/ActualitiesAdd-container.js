import React from 'react';
import { connect } from 'react-redux';

import ActualitiesAddView from './ActualitiesAdd-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ActualitiesAddContainer = ({ language }) => <ActualitiesAddView translations={translations[language]} />;

export default connect(mapStateToProps)(ActualitiesAddContainer);
