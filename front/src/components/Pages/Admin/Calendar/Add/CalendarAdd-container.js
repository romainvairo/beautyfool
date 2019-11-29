import React from 'react';
import { connect } from 'react-redux';

import CalendarAddView from './CalendarAdd-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CalendarAddContainer = ({ language }) => <CalendarAddView translations={translations[language]} />;

export default connect(mapStateToProps)(CalendarAddContainer);
