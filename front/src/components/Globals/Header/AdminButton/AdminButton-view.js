import React from 'react';
import { Link } from 'react-router-dom';
import { Auth } from '../../../../services';

import './AdminButton.scss';

const AdminButtonView = () => (
    <Link className="adminButton-link font-bold" to="/admin"><i className="AdminIcon fas fa-user-shield block text-center"></i><span className="block text-center text-xs">
          Admin
        </span></Link>
);

export default AdminButtonView;
