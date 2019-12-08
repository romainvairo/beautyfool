import React from 'react';
import classNames from 'classnames';

const SwipeableListView = ({ children, className }) => (
  <div id="swipeable-list" className={classNames(className, 'w-full')}>
    {children}
  </div>
);

export default SwipeableListView;
