import React from 'react';
import moment from 'moment';
import QS from 'uqs';
import { connect } from 'react-redux';

import translations from './translations';
import CalendarView from './Calendar-view';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

/**
 * @typedef {import('moment').Moment} Moment
 */

class CalendarContainer extends React.PureComponent {

  state = {
    date: moment({ year: 2019, month: 11 }),
  }

  /**
   * @param {Moment} date
   */
  setDate = date => {
    this.setState({ date });
  }

  render() {
    const { language } = this.props;
    const { date } = this.state

    // parse the query string from `search` in `window.location` object
    const params = QS.parse(window.location.search);

    return  <CalendarView
      translations={translations[language]}
      language={language}
      date={date}
      setDate={this.setDate}
      duration={params.duration}
      price={params.price}
    />
  }
}

export default connect(mapStateToProps)(CalendarContainer);
