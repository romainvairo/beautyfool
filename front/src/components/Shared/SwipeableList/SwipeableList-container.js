import React from 'react';
import { isFunction } from 'lodash';

import SwipeableListView from './SwipeableList-view';
import { swipeLeft, swipeRight } from './actions';

/**
 * @typedef {import('./types').Props} Props
 * @extends {React.PureComponent<Props>}
 */
class SwipeableListContainer extends React.PureComponent {

  clientClickX = 0;

  componentDidMount() {
    const swipeableList = document.getElementById('swipeable-list');
    swipeableList.addEventListener('mousedown', this.mouseDown);
    swipeableList.addEventListener('mouseup', this.mouseUp);
  }

  componentWillUnmount() {
    const swipeableList = document.getElementById('swipeable-list');
    swipeableList.removeEventListener('mousedown', this.mouseDown);
    swipeableList.removeEventListener('mouseup', this.mouseUp);
  }

  swipeLeft = () => swipeLeft(this.props);

  swipeRight = () => swipeRight(this.props);

  mouseDown = e => {
    this.clientClickX = e.clientX;
  }

  mouseUp = e => {
    const { page, lastPage } = this.props;

    // if the mouse is released more than 49 pixels to the left
    // we call a function handler for the next page
    // otherwise if the mouse is released more than 49 pixels to the right
    // we call a function handler for the previous page
    if (e.clientX <= (this.clientClickX - 50) && page < lastPage) {
      this.swipeLeft()(page + 1, 'left', e);
    } else if (e.clientX >= (this.clientClickX + 50) && page > 1) {
      this.swipeRight()(page - 1, 'right', e);
    }
  }

  render() {
    const { children, className } = this.props;

    return <SwipeableListView children={children} className={className} />;
  }
}

export default SwipeableListContainer;
