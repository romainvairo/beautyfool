import React from 'react';
import moment from 'moment';
import QS from 'uqs';
import { connect } from 'react-redux';

import axios from '../../../axios';
import translations from './translations';
import CalendarView from './Calendar-view.temp';
import { Cacher } from '../../../services/Cacher';
import { IsTimeOccupied } from './actions';
import { range } from '../../../utils';
import { appointments } from './data';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.clientReducer.user,
  appointment: state.clientReducer.appointment,
});

/**
 * @typedef {import('moment').Moment} Moment
 */

class CalendarContainer extends React.PureComponent {

  isTimeOccupiedCache = new Cacher({ date: null, hour: null, day: null })
    .setCalculateValue(({ hour, day, date }) =>
      new IsTimeOccupied(appointments)
        .setDate(moment(date))
        .setHour(hour)
        .setDay(day)
        .results(true)
    );
  isCellSelectedCache = new Cacher({
    cellDate: null,
    cellHour: null,
    cellDay: null,
    choosenDate: null,
    duration: null,
  })
    .setCalculateValue(({ cellDate, cellHour, cellDay, choosenDate, duration }) =>
      new IsTimeOccupied([{ date: choosenDate, duration }])
        .setDate(moment(cellDate))
        .setHour(cellHour)
        .setDay(cellDay)
        .results()
    );

  state = {
    date: moment({ year: 2019, month: 11 }),
    selectedCell: {
      date: null,
      hour: null,
      day: null,
      target: null,
    },
    // parse the query string from `search` in `window.location` object
    params: {},
    error: '',
  }

  componentDidMount() {
    const { appointment } = this.props;

    this.setState({ params: QS.parse(appointment.queryString) });
  }

  componentDidUpdate(prevProps) {
    const { appointment } = this.props;

    if (appointment.queryString !== prevProps.appointment.queryString) {
      this.setState({ params: QS.parse(appointment.queryString) });
    }
  }

  /**
   * calculate if the time is occupied only once and put it in a "cache"
   * to return it if the values with which we calculate it are the same
   * @param {Number} hour
   * @param {Number} day
   * @returns {Boolean}
   */
  getIsTimeOccupied = (hour, day) => {
    const { date } = this.state;
    return this.isTimeOccupiedCache.getValue({ hour, day, date });
  }

  onCellClick = (hour, day) => e => {
    const { date } = this.state;

    this.setState({
      selectedCell: {
        date: date.toString(),
        hour,
        day,
        target: e.target,
      }
    });
  }

  isCellSelected = (hour, day) => {
    const { selectedCell, date, params } = this.state;

    if (!selectedCell.date) {
      return false;
    }

    // dataset == recover a value from the HTML element
    const isTargetOccupied = selectedCell.target.dataset.isOccupied;

    if (isTargetOccupied === 'true') {
      return;
    }

    const minuteMatches = params.duration.match(/[0-9]+ ?minutes?/);
    const minutes = minuteMatches
      ? minuteMatches[0].match(/[0-9]+/)[0]
      : 0;
    const hourMatches = params.duration.match(/[0-9]+ ?(hour|heure)s?/);
    const hours = hourMatches
      ? hourMatches[0].match(/[0-9]+/)[0]
      : 0;

    // create the hour where we will recover both the hour and the minutes
    const mHour = moment({ hour: 8, minute: 30 });
    // add 30 minutes for each hour interval
    range(1, selectedCell.hour).forEach(() => mHour.add({ minute: 30 }));

    const choosenDate = moment(selectedCell.date)
      .date(selectedCell.day)
      .hour(mHour.hour())
      .minute(mHour.minute());

    return this.isCellSelectedCache.getValue({
      cellDate: date,
      cellHour: hour,
      cellDay: day,
      choosenDate: choosenDate,
      duration: moment({ minute: +minutes, hour: +hours }),
    });
  }

  /**
   * @param {Moment} date
   */
  setDate = date => {
    this.setState({ date });
  }

  onButtonClick = () => {
    const { selectedCell, date } = this.state;
    const { history, appointment, user } = this.props;

    const invalidCells = document.querySelectorAll('[data-is-occupied="true"][data-is-selected="true"]');


    // create the hour where we will recover both the hour and the minutes
    const mHour = moment({ hour: 8, minute: 30 });
    // add 30 minutes for each hour interval
    range(1, selectedCell.hour).forEach(() => mHour.add({ minute: 30 }));


    if (invalidCells.length) {
      this.setState({ error: 'invalid' });
    } else if(!selectedCell.date) {
      this.setState({ error: 'unchoosen' });
    } else {
      this.setState({ error: '' });
      axios.post('/api/appointments/add', {
        date: date.clone().hour(mHour.hour()).date(selectedCell.day).minute(mHour.minute()),
        services: appointment.services.map(s => s._id),
        customer: user._id,
      })
        .then(() => {
          history.push('/');
        })
        .catch((error) =>{
          console.error(error);
        })
    }
  }

  render() {
    const { language } = this.props;
    const { date, params, error } = this.state;

    return <CalendarView
      translations={translations[language]}
      language={language}
      date={date}
      setDate={this.setDate}
      duration={params.duration}
      price={params.price}
      isCellSelected={this.isCellSelected}
      isTimeOccupied={this.getIsTimeOccupied}
      onCellClick={this.onCellClick}
      onButtonClick={this.onButtonClick}
      error={error}
    />;
  }
}

export default connect(mapStateToProps)(CalendarContainer);
