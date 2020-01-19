import React from 'react';
import moment from 'moment';
import { DayPilot } from 'daypilot-pro-react';
import { connect } from 'react-redux';

import './Calendar.scss';
import CalendarView from './Calendar-view';
import axios from '../../../../axios';
import { getDates, correctFormatDate } from '../../../../utils';
import { Auth } from '../../../../services';
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
  appointments = [];

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

    this.scheduler.bubble = new DayPilot.Bubble({
      onLoad: args => {
        const e = args.source;
        const { _id } = e.data;

        const appointment = this.appointments.find(a => a._id === _id);

        if (!appointment) {
          return;
        }

        let totalDuration = 0;
        let totalPrice = 0;
        let servicesHtml = '<div>services:</div>';

        appointment.services.forEach(s => {
          totalDuration += new Date(s.duration).getTime();
          totalPrice += s.price;

          servicesHtml += (
            '<div class="ml-2 border-b border-black">' +
            'name: ' + s.name +
            '<br/>' +
            'category: ' + s.category.name +
            '</div>'
          );
        });

        args.html = (
          '<div>customer: ' + appointment.customer.username + '</div>' +
          '<div>duration: ' + correctFormatDate(totalDuration) + '</div>' +
          '<div>price: ' + totalPrice + ' €</div>' +
          '<br/>' +
          servicesHtml
        );
      }
    })
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
        this.appointments = data.data;

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

          event._id = appointment._id;
          // set ending datetime
          event.end = new DayPilot.Date(end.toDate());

          event.text = 'Clicker pour annuler un rendez-vous';

          // add the appointment into the events list
          this.addClosure(event);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  onEventClick = args => {
    DayPilot.Modal.confirm('Confirmer l\'annulation ?').then(modal => {
      if (modal.result === 'ok') {
        axios.delete('/api/appointments/' + args.e.data._id + '/delete')
          .then(() => {
            console.log('appointment has been delete');
            this.scheduler.events.list = [];
            this.closeForBreaks();
            this.getAppointments();
          })
          .catch(err => {
            console.error(err);
          });
      }
    })
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
      text: args.text || '',
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

  setRef = component => {
    this.scheduler = component && component.control;
  }

  onButtonClick = () => {
    const { appointment, user, history } = this.props;

    if(!this.event){
      this.setState({ error: 'You must place your appointment' });
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
    const { language } = this.props;
    const { startDate, error } = this.state;

    return <CalendarView
      setRef={this.setRef}
      state={this.state}
      onEventClick={this.onEventClick}
      onBackward={this.onBackward}
      onForward={this.onForward}
      date={moment(startDate.toDate())}
      language={language}
      onButtonClick={this.onButtonClick}
      error={error}
      translations={translations[language]}
    />;
  }
}

export default connect(mapStateToProps)(CalendarContainer);
