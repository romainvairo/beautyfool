import React from 'react';

import UsersGetAllView from './GetAll';

const UsersView = ({ translations, page }) => (
  <div>
    <UsersGetAllView page={page} />
  </div>
);

export default UsersView;
