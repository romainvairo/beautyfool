import React from 'react';
import { throttle } from 'lodash';

import InfiniteScrollView from './InfiniteScroll-view';
import {
  getTopPage,
  getBottomPage,
  scrollTopHandler,
  scrollBottomHandler,
  topThresold,
  bottomThresold,
} from './actions';

/**
 * @typedef {import('./types').Props} Props
 * @extends {React.PureComponent<Props>}
 */
class InfiniteScrollContainer extends React.PureComponent {

  bottomPage = getBottomPage(this.props);
  topPage = getTopPage(this.props);
  prevY = window.scrollY;

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.onScroll, 100));
    console.log(this.topPage, this.bottomPage)
  }

  componentDidUpdate(prevProps) {
    const { page, topPage, bottomPage } = this.props;

    if (page !== prevProps.page) {
      this.topPage = page - 1;
      this.bottomPage = page;
    }

    if (topPage !== prevProps.topPage) {
      this.topPage = topPage;
    }

    if (bottomPage !== prevProps.bottomPage) {
      this.bottomPage = bottomPage;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.onScroll, 100));
  }

  scrollTopHandler = () => scrollTopHandler(this.props);
  scrollBottomHandler = () => scrollBottomHandler(this.props);
  topThresold = () => topThresold(this.props);
  bottomThresold = () => bottomThresold(this.props);

  onScrollTop = e => {
    const prevented = this.scrollTopHandler()(this.topPage--, 'top', e);

    if (prevented) {
      this.topPage++;
    }
  }

  onScrollBottom = e => {
    const prevented = this.scrollBottomHandler()(this.bottomPage++, 'bottom', e);

    if (prevented) {
      this.bottomPage--;
    }
    this.maxY = window.scrollY;
  }

  onScroll = e => {
    const { preventHandling, lastPage } = this.props;

    if (preventHandling) {
      return;
    }

    // get the element that has the infinite scroll
    const infiniteScroll = document.getElementById('infinite-scroll');
    // get its height and top position
    const bounding = infiniteScroll.getBoundingClientRect();
    // calculate the user's scroll position
    const scrollBottomY = (bounding.height + bounding.top) - window.innerHeight;
    const scrollTopY = bounding.top + this.topThresold();

    if (scrollBottomY <= this.bottomThresold() && this.bottomPage <= lastPage && this.prevY < window.scrollY) {
      this.onScrollBottom(e);
    } else if (scrollTopY >= this.topThresold() && this.topPage > 0 && this.prevY > window.scrollY) {
      this.onScrollTop(e);
    }

    this.prevY = window.scrollY;
  }

  render() {
    const { children, className } = this.props;

    return <InfiniteScrollView children={children} className={className} />;
  }
}

InfiniteScrollContainer.defaultProps = {
  thresold: 400,
};

export default InfiniteScrollContainer;
