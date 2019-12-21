import React from 'react';
import Button from '@material-ui/core/Button';

import './Dropdown.scss';

const DropdownButtonView = ({ onClick }) => (
  <Button onClick={onClick} aria-controls="simple-menu" aria-haspopup="true" >
    <i className="fas fa-bars drop"></i>
  </Button>
);


export default DropdownButtonView;
