import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import TableView from './Table-view';

const mapStateToProps = state => ({
  language: state.clientReducer.language
});

class TableContainer extends React.PureComponent {
  state = {
    date: moment({ year: 2019, month: 11 }),
  }

  render() {
    const {  language } = this.props;
    const { date } = this.state;

    return <TableView
      language={language}
      date={date}
    />;
  }
}

export default connect (mapStateToProps)(TableContainer);
