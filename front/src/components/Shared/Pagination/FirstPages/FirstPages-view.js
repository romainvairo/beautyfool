import React from 'react';

import PageButton from '../PageButton';

const FirstPagesView = ({ page, onPageChange }) => (
  <>
    { page > 1 && <PageButton page={1} onClick={onPageChange} /> }
    { page > 2 && <PageButton page={2} onClick={onPageChange} /> }
  </>
);

export default FirstPagesView;
