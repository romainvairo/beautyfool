import React from 'react';
import { connect } from 'react-redux';

import PaginationView from './Pagination-view';
import PageButton from './PageButton';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class PaginationContainer extends React.PureComponent {

  render() {
    const { language, onPageChange, page, lastPage } = this.props;

    return <PaginationView
      onPageChange={onPageChange}
      currentPage={+page}
      lastPage={lastPage}
    />;
  }
}

export default connect(mapStateToProps)(PaginationContainer);
