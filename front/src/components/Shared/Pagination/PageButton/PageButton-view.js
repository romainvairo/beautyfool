import React from 'react';
import { Button } from '@material-ui/core';

import './PageButton.scss';

const PageButtonView = ({ page, onClick }) => (
  <Button className="page-button" onClick={e => onClick(page, e)}>
    {page}
  </Button>
);

export default PageButtonView;
