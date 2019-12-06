import React from 'react';

import PageButton from '../PageButton';

const filter = lastPage => p => p < (lastPage - 1);

const NextPagesView = ({ page, lastPage, onPageChange }) => (
  <React.Fragment>
    {[page + 1, page + 2].filter(filter(lastPage)).map(page => (
      <PageButton key={page} page={page} onClick={onPageChange} />
    ))}
  </React.Fragment>
);

export default NextPagesView;
