import React from 'react';
import classNames from 'classnames';

import SwipeableList from '../SwipeableList';
import InfiniteScroll from '../InfiniteScroll';

const SuperListView = ({
  // general props
  children,
  // swiper props
  onSwipe,
  onSwipeLeft,
  onSwipeRight,
  // scroller props
  onScroll,
  onScrollTop,
  onScrollBottom,
  thresold,
  topThresold,
  bottomThresold,
  topPage,
  bottomPage,
  preventHandling,
  // common props
  page,
  lastPage,
  className,
  classes,
}) => (
  <SwipeableList
    onSwipe={onSwipe}
    onSwipeLeft={onSwipeLeft}
    onSwipeRight={onSwipeRight}
    page={page}
    lastPage={lastPage}
    className={classNames(className, classes.swiper)}
  >
    <InfiniteScroll
      onScroll={onScroll}
      onScrollTop={onScrollTop}
      onScrollBottom={onScrollBottom}
      thresold={thresold}
      topThresold={topThresold}
      bottomThresold={bottomThresold}
      page={page}
      topPage={topPage}
      bottomPage={bottomPage}
      lastPage={lastPage}
      preventHandling={preventHandling}
      className={classNames(classes.scroller)}
    >
      {children}
    </InfiniteScroll>
  </SwipeableList>
);

SuperListView.defaultProps = {
  classes: {},
};

export default SuperListView;
