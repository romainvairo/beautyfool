import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import ActionButton from '../../../../../../Shared/ActionButton';

const UserActionsView = ({ translations, user, deleteAction }) => (
  <Grid xs={12} sm={4} item>
    <Grid container className="sm:items-end sm:flex-column">
      <Grid xs={6} sm={12} item className="my-1 sm:my-0 px-1 sm:mb-3 w-full">
        <ActionButton.Delete onClick={deleteAction(user)} className="w-full">{translations.deleteButton}</ActionButton.Delete>
      </Grid>
      <Grid xs={6} sm={12} item className="w-full my-1 sm:my-0 px-1">
        <ActionButton.Edit className="w-full">{translations.editButton}</ActionButton.Edit>
      </Grid>
    </Grid>
  </Grid>
);

export default UserActionsView;
