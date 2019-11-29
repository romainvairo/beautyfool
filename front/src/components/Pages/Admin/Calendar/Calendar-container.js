import React from 'react';
import { connect } from 'react-redux';

import CalendarView from './Calendar-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CalendarContainer = ({ language }) => <CalendarView translations={translations[language]} />;

export default connect(mapStateToProps)(CalendarContainer);
