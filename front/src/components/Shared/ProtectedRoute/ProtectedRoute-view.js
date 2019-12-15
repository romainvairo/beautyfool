import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Auth } from '../../../services';

const ProtectedRoute = ({ role, ...props }) => {
  return Auth.hasRole(role)
    ? <Route {...props} />
    : <Redirect to="/login" />;
}

export default ProtectedRoute;
