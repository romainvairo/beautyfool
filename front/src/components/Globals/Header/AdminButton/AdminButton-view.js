import React from 'react';
import { Link } from 'react-router-dom';
import { Auth } from '../../../../services';

const AdminButtonView = () => (
  <div>
    <Link className="adminButton-link font-bold text-xs" to="/admin"><i class="fas fa-user-shield text-4xl block text-center"></i>Menu Admin</Link>
  </div>
);

export default AdminButtonView;
