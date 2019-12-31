import React from 'react';
import moment from 'moment';
import { DayPilot } from 'daypilot-pro-react';
import { connect } from 'react-redux';

import './Calendar.scss';
import CalendarView from './Calendar-view';
import axios from '../../../axios';
import { getDates, correctFormatDate } from '../../../utils';
import { Auth } from '../../../services';
import { onForward, onBackward, setDate } from './actions';

import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.clientReducer.user,
  appointment: state.clientReducer.appointment,
});

class CalendarContainer extends React.Component {

  event = null;
  scheduler;
  duration;

  state = {
    startDate: DayPilot.Date.today(),
    days: 31,
    scale: "Day",
    headerDateFormat: 'dddd d',
    columnWidthSpec: "Fixed",
    columnWidth: 100,
    cellHeight: 25,
    eventResizeHandling: false,
    eventMoveHandling: false,
  }

  componentDidMount() {
    process.nextTick(() => console.log(this.scheduler));
    this.getAppointments();
    this.closeForBreaks();
  }

  componentDidUpdate(prevProps, prevState) {
    const { startDate } = this.state;

    if (startDate.toString() !== prevState.startDate.toString()) {
      this.closeForBreaks();
    }
  }


  onBackward = onBackward(this);
  onForward = onForward(this);
  setDate = setDate(this);

  getAppointments = () => {
    axios.get('/api/appointments')
      .then(({ data }) => {
        data.data.forEach(appointment => {
          const event = {};

          // starting datetime
          event.start = new DayPilot.Date(new Date(appointment.date));

          // ending datetime
          let end = moment(appointment.date);

          // calculate the ending datetime based on the duration of the services
          appointment.services.forEach(service => {
            const duration = moment(service.duration);

            end.add(duration.minute(), 'minute');
          });

          end.add(1, 'hour')

          // set ending datetime
          event.end = new DayPilot.Date(end.toDate());

          // add the appointment into the events list
          this.addClosure(event);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  addClosure = args => {
    // set the color of the entire cell
    args.barColor = args.backColor = args.barBackColor = '#de310a';
    args.isClosure = true;

    this.addEvent(args);
  }

  addEvent = args => {
    this.scheduler.events.add({
      ...args,
      id: DayPilot.guid(),
      text: '',
      barColor: args.barColor || '#12ab34',
    });
  }

  closeForBreaks = () => {
    const { startDate } = this.state;
    const date = moment(startDate.toDate());
    const minDate = date.date();
    const maxDate = minDate + 31;

    for (let i = minDate; i <= maxDate; i++) {

      const cloneDate = date.clone();

      if (!date.day()) {
        this.addClosure({
          start: new DayPilot.Date(cloneDate.hour(1).minute(0).toDate()),
          end: new DayPilot.Date(cloneDate.hour(25).minute(0).toDate()),
        });
      } else {
        this.addClosure({
          start: new DayPilot.Date(cloneDate.hour(13).minute(0).toDate()),
          end: new DayPilot.Date(cloneDate.hour(15).minute(0).toDate()),
        });
      }

      date.add(1, 'day');
    }
  }

  canTakeAppointment = () => {
    const { appointment } = this.props;

    const results = {
      value: true,
      isLogged: true,
      hasServices: true,
    };

    if (!Auth.isLogged()) {
      results.isLogged = false;
      results.value = false;
    }

    if (!appointment.services.length) {
      results.hasServices = false;
      results.value = false;
    }

    return results;
  }

  onTimeRangeSelected = args => {
    const { appointment, language } = this.props;

    this.scheduler.clearSelection();

    const canTakeAppointment = this.canTakeAppointment();

    if (!canTakeAppointment.isLogged) {
      this.scheduler.message(translations[language].messages.one);
      return;
    }

    if (!canTakeAppointment.hasServices) {
      this.scheduler.message(translations[language].messages.two);
      return;
    }

    args.end = new DayPilot
      .Date(args.start)
      .addHours(appointment.totalDuration.hour())
      .addMinutes(appointment.totalDuration.minute());

    const dates = getDates(args.start.value, args.end.value);
    const events = this.scheduler.events.list;

    let canAddEvent = true;

    for (let i = 0; i < events.length; i++) {
      const event = events[i];

      const eventStart = moment(event.start.value);
      const eventEnd = moment(event.end.value);

      if (event.isClosure && dates.some(d => d.isBetween(eventStart, eventEnd))) {
        canAddEvent = false;
        break;
      }
    }

    if (!canAddEvent) {
      this.scheduler.message(translations[language].messages.three);
      return;
    }

    if (this.event) {
      this.scheduler.events.remove(this.event);
    }

    this.event = args;
    this.addEvent(args);
  }

  setRef = component => {
    this.scheduler = component && component.control;
  }

  onButtonClick = () => {
    const { appointment, user, history, language } = this.props;
    if(!this.event){
      this.setState({ error: translations[language].errors.unchoosen });
      return;
    }

    this.setState({ error: '' });
    axios.post('/api/appointments/add', {
      date: this.event.start,
      services: appointment.services.map(s => s._id),
      customer: user._id,
    })
      .then(() => {
        history.push('/');
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { language, appointment } = this.props;
    const { startDate, error } = this.state;

    const canTakeAppointment = this.canTakeAppointment();

    return <CalendarView
      setRef={this.setRef}
      onTimeRangeSelected={this.onTimeRangeSelected}
      state={this.state}
      onBackward={this.onBackward}
      onForward={this.onForward}
      date={moment(startDate.toDate())}
      language={language}
      onButtonClick={this.onButtonClick}
      error={error}
      price={canTakeAppointment.value ? appointment.totalPrice : null}
      duration={canTakeAppointment.value ? correctFormatDate(appointment.totalDuration) : null}
      translations={translations[language]}
    />;
  }
}

export default connect(mapStateToProps)(CalendarContainer);
