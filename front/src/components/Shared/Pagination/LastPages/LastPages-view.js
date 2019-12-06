import React from 'react';

import PageButton from '../PageButton';

const LastPagesView = ({ page, lastPage, onPageChange }) => (
  <>
    { page < (lastPage - 1) && <PageButton page={lastPage - 1} onClick={onPageChange} /> }
    { page < lastPage && <PageButton page={lastPage} onClick={onPageChange} /> }
  </>
);

export default LastPagesView;
