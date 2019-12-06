import React from 'react';

import PaginationView from './Pagination-view';

const PaginationContainer = ({ onPageChange, page, lastPage }) => (
  <PaginationView
    onPageChange={onPageChange}
    currentPage={+page}
    lastPage={lastPage}
  />
);

export default PaginationContainer;
