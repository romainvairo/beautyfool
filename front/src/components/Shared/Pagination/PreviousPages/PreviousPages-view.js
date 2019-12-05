import React from 'react';

import PageButton from '../PageButton';

const PreviousPagesView = ({ page, onPageChange }) => (
  <>
    {[page - 2, page - 1].filter(p => p > 2).map(page => (
      <PageButton key={page} page={page} onClick={onPageChange} />
    ))}
  </>
);

export default PreviousPagesView;
