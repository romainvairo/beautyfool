import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

const AdminButtonView = (isAdmin) => (
  <div>
    { isAdmin && <Link to="/admin" className={classNames(
              (isAdmin ? 'adminButton-link m-8 text-lg px-4 text-white bg-red-600 font-bold rounded border-black border-solid border' : 'adminButton-link hidden'), )}>Menu Admin
    </Link>
    }
  </div>
);

export default AdminButtonView;
