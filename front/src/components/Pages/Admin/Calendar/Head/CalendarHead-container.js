import React from 'react';

import CalendarHeadView from './CalendarHead-view';
import { onForward, onBackward } from './actions';

class CalendarHeadContainer extends React.PureComponent {

  onForward = () => onForward(this.props);
  onBackward = () => onBackward(this.props);

  render() {
    const { date, language } = this.props;

    return <CalendarHeadView
      date={date}
      language={language}
      onForward={this.onForward()}
      onBackward={this.onBackward()}
    />;
  }
}

export default CalendarHeadContainer;
