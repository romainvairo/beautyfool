import React from 'react';

import GridView from './Grid-view';

class GridContainer extends React.PureComponent {

  onClick = (hour, day) => e => {
    const { onCellClick } = this.props;

    onCellClick(hour, day)(e);
    // forces the grid to updates with the forceUpdate method of React.PureComponent
    this.forceUpdate();
  }

  render() {
    const { date, getIsAppointment, getAppointment, getIsClosed } = this.props;

    return <GridView
      date={date}
      getIsAppointment={getIsAppointment}
      getAppointment={getAppointment}
      getIsClosed={getIsClosed}
      onClick={this.onClick}
    />;
  }
}

export default GridContainer;
