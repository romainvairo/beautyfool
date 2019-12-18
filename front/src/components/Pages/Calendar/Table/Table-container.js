import React from 'react';
import { connect } from 'react-redux';

import TableView from './Table-view';

const mapStateToProps = state => ({
  language: state.clientReducer.language
});

const TableContainer = ({ language, date }) => <TableView language={language} date={date} />

export default connect (mapStateToProps)(TableContainer);
