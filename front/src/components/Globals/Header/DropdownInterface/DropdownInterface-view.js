import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

import './Dropdown.scss';

const DropdownInterfaceView = ({ onClose }) => (
  <Grid container className="dropdown">
    <Grid xs={12} item className="dropdown-closeButton text-right">
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Grid>
    <div className="dropdown-link pt-4">
      <i className="fas fa-home text-4xl pr-4"></i><Link className="dropdown-icons" to="/">Accueil</Link>
    </div>
    <div className="dropdown-link pt-4">
      <i className="far fa-newspaper text-4xl pr-4"></i><Link className="dropdown-icons" to ="/news">Actualités</Link>
    </div>
    <div className="dropdown-link pt-4">
      <i className="fas fa-clipboard-list ml-2 text-4xl pr-4"></i><Link className="dropdown-icons ml-1" to ="/benefits">Prestations</Link>
    </div>
    <div className="dropdown-link flex-none pt-4">
      <i className="fas fa-paint-brush text-4xl pr-4"></i><Link className="dropdown-icons flex-none" to ="/beauty-tips">Astuces beauté</Link>
    </div>
    <div className="dropdown-link pt-4">
      <i className="fas fa-image pl-2 text-4xl pr-4"></i><Link className="dropdown-icons" to ="/gallery">Galerie</Link>
    </div>
    <div className="dropdown-link  pt-4">
      <i className="fas fa-chalkboard-teacher text-4xl pr-4"></i><Link className="dropdown-icons" to ="/presentation">Présentation</Link>
    </div>
  </Grid>
);

export default DropdownInterfaceView;
