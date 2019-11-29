import React from 'react';
import { connect } from 'react-redux';

import CalendarEditView from './CalendarEdit-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CalendarEditContainer = ({ language }) => <CalendarEditView translations={translations[language]} />;

export default connect(mapStateToProps)(CalendarEditContainer);
