import React from 'react';
import classNames from 'classnames';
import { Grid, Tooltip, IconButton, List, ListItem, Divider, ListItemText } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from 'react-router-dom';

import translations from './translations';
import Dropdown from './Dropdown.scss';

const DropdownInterfaceView = ({ translations, onClose, onClick }) => (
  <Grid container className="dropdown">
    <Grid xs={12} item className="dropdown-closeButton text-right">
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Grid>
    <div className="dropdown-link">
      <i class="fas fa-home text-4xl"></i><Link className="dropdown-icons" to="/">Accueil</Link>
    </div>
    <div className="dropdown-link">
      <i class="far fa-newspaper text-4xl"></i><Link className="dropdown-icons" to ="/news">Actualités</Link>
    </div>
    <div className="dropdown-link">
      <i class="fas fa-clipboard-list ml-2 text-4xl"></i><Link className="dropdown-icons ml-1" to ="/benefits">Prestations</Link>
    </div>
    <div className="dropdown-link">
      <i class="fas fa-paint-brush text-4xl"></i><Link className="dropdown-icons" to ="/beauty-tips">Astuces beauté</Link>
    </div>
    <div className="dropdown-link">
      <i class="fas fa-image pl-2 text-4xl"></i><Link className="dropdown-icons" to ="/gallery">Galerie</Link>
    </div>
    <div className="dropdown-link">
      <i class="fas fa-chalkboard-teacher text-4xl"></i><Link className="dropdown-icons" to ="/presentation">Présentation</Link>
    </div>
  </Grid>
);

export default DropdownInterfaceView;
