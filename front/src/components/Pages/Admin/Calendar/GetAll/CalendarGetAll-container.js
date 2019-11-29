import React from 'react';
import { connect } from 'react-redux';

import CalendarGetAllView from './CalendarGetAll-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CalendarGetAllContainer = ({ language }) => <CalendarGetAllView translations={translations[language]} />;

export default connect(mapStateToProps)(CalendarGetAllContainer);
