import React from 'react';
import { connect } from 'react-redux';

import TableView from './Table-view';

const mapStateToProps = state => ({
  language: state.clientReducer.language
});

const TableContainer = ({ language, date, getIsClosed, getIsAppointment, getAppointment, onCellClick }) => <TableView
  language={language}
  date={date}
  getIsClosed={getIsClosed}
  getIsAppointment={getIsAppointment}
  getAppointment={getAppointment}
  onCellClick={onCellClick}
/>

export default connect (mapStateToProps)(TableContainer);
