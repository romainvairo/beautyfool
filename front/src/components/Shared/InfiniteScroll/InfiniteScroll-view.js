import React from 'react';
import classNames from 'classnames';

const InfiniteScrollView = ({ children, className }) => (
  <div id="infinite-scroll" className={classNames(className, 'w-full')}>
    {children}
  </div>
);

export default InfiniteScrollView;
