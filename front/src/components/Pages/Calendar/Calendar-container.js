import React from 'react';
import { connect } from 'react-redux';

import translations from './translations';
import CalendarView from './Calendar-view';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CalendarContainer = ({ language }) => <CalendarView translations={translations[language]} />

export default connect(mapStateToProps)(CalendarContainer);
