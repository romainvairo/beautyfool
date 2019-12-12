import React from 'react';
import { Grid } from '@material-ui/core';

import Actions from './Actions';
import Divider from '../../../../../Shared/Divider';

const ComposerItemGetAllView = ({ item, callDeleteRequest, render: Render }) => (
  <Grid container item className="mb-2">
    <Grid xs={12} item>
      <Grid container className="px-1">
        <Grid xs={12} sm={8} item>
          <Render item={item} callDeleteRequest={callDeleteRequest} />
        </Grid>
        <Grid xs={12} sm={4} item>
          <Actions item={item} callDeleteRequest={callDeleteRequest} />
        </Grid>
      </Grid>

      <Divider className="mt-2" />
    </Grid>
  </Grid>
);

export default ComposerItemGetAllView;
