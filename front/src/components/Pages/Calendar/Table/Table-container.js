import React from 'react';
import { connect } from 'react-redux';

import TableView from './Table-view';

const mapStateToProps = state => ({
  language: state.clientReducer.language
});

const TableContainer = ({ language, date, isCellSelected, isTimeOccupied, onCellClick }) => <TableView
  language={language}
  date={date}
  isCellSelected={isCellSelected}
  isTimeOccupied={isTimeOccupied}
  onCellClick={onCellClick}
/>

export default connect (mapStateToProps)(TableContainer);
