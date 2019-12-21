import React from 'react';

import DisplayHoursView from './DisplayHours-view';

class DisplayHoursContainer extends React.PureComponent {

  /**
   * get the all hours in an interval of 30 minutes within the starting time and the ending time
   * @returns {String[]}
   */
  getHourElements = () => {
    const { start, end } = this.props;
    const hours = [];
    const currentHour = start.clone();
    // add 30 minutes to `end` to include the ending time
    const includingEnd = end.clone().add({ minute: 30 });

    // while the `currentHour` is before the `includingEnd`
    // we push the `currentHour` into the array `hours`
    // and add 30 minutes into the `currentHour`
    while (currentHour.isBefore(includingEnd)) {
      hours.push(currentHour.format('H[h]mm'));
      currentHour.add({ minute: 30 });
    }

    return hours;
  }

  render() {
    return <DisplayHoursView
      hours={this.getHourElements()}
    />;
  }
}

export default DisplayHoursContainer;
