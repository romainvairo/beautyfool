import React from 'react';
import { connect } from 'react-redux';

import CalendarGetOneView from './CalendarGetOne-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CalendarGetOneContainer = ({ language }) => <CalendarGetOneView translations={translations[language]} />;

export default connect(mapStateToProps)(CalendarGetOneContainer);
