import React from 'react';
import moment from 'moment';
import { DayPilot } from 'daypilot-pro-react';
import { connect } from 'react-redux';

import CalendarView from './Calendar-view';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.clientReducer.user,
  appointment: state.clientReducer.appointment,
});

class CalendarContainer extends React.Component {

  event = null;
  scheduler;

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

  addEvent = args => {
    this.scheduler.events.add({
      id: DayPilot.guid(),
      text: '',
      start: args.start,
      end: args.end,
      barColor: '#12ab34'
    });
  }

  onTimeRangeSelected = args => {
    this.scheduler.clearSelection();

    if (this.event) {
      this.scheduler.events.remove(this.event);
    }

    args.end = new DayPilot.Date(args.start).addHours(1);
    this.event = args;
    this.addEvent(args);
  }

  setRef = component => {
    this.scheduler = component && component.control;
  }

  render() {
    return <CalendarView
      setRef={this.setRef}
      onTimeRangeSelected={this.onTimeRangeSelected}
      state={this.state}
    />;
  }
}

export default connect(mapStateToProps)(CalendarContainer);
