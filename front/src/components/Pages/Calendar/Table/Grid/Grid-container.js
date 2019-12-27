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
    const { date, isTimeOccupied, isCellSelected } = this.props;

    return <GridView
      date={date}
      isTimeOccupied={isTimeOccupied}
      isCellSelected={isCellSelected}
      onClick={this.onClick}
    />;
  }
}

export default GridContainer;
