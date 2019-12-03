import React from 'react';
import { Grid } from '@material-ui/core';

import UserInfo from './Info';
import UserActions from './Actions';
import Divider from '../../../../../Shared/Divider';

const UserView = ({ user, callDeleteRequest }) => (
  <Grid container item className="mb-2">
    <Grid xs={12} item>
      <Grid container className="px-1">
        <UserInfo user={user} />
        <UserActions user={user} callDeleteRequest={callDeleteRequest} />
      </Grid>

      <Divider className="mt-2" />
    </Grid>
  </Grid>
);

export default UserView;
