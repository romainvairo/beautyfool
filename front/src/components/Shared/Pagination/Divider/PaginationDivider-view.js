import React from 'react';

const PaginationDividerView = ({ page, lastPage }) => {
  return (page > 2) && (page < lastPage - 2)
    ? <span>...</span>
    : null;
}

export default PaginationDividerView;
