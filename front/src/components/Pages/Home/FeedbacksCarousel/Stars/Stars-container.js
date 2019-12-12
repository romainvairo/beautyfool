import React from 'react';

import StarsView from './Stars-view';

class StarsContainer extends React.PureComponent {

  value = this.props.rate;

  getSingleValue = () => {
    if (this.value <= 0) {
      return 0;
    }

    this.value--;
    return 1;
  }

  render() {
    const { skill } = this.props;

    return <StarsView
      getSingleValue={this.getSingleValue}
    />
  }
}

export default StarsContainer;
