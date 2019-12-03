import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './Dropdown.scss';

const DropdownView = ({ translations }) => (
    <Button aria-controls="simple-menu" aria-haspopup="true" ><i className="fas fa-bars drop"></i>
    </Button>
);


export default DropdownView;
