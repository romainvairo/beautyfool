import React from 'react';
import { Link } from 'react-router-dom';
import { Auth } from '../../../../services';

const AdminButtonView = () => (
  <div>
    {Auth.hasRole('admin')
      ? ( <Link className="adminButton-link m-8 text-lg px-4 text-white bg-red-600 font-bold rounded border-black border-solid border" to="/admin">Menu admin</Link> )
      : ( null )
    }
  </div>
);

export default AdminButtonView;
