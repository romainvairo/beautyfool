import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';

import ActionButton from '../../../../../../Shared/ActionButton';

const UserActionsView = ({ translations, user, deleteAction }) => (
  <Grid xs={12} sm={4} item>
    <Grid container className="items-end justify-end sm:flex-col">
      <Grid xs={6} sm={9} md={7} lg={5} item className="my-1 sm:my-0 px-1 sm:mb-3 w-full">
        <ActionButton.Delete onClick={deleteAction(user)} className="w-full">{translations.deleteButton}</ActionButton.Delete>
      </Grid>
      <Grid xs={6} sm={9} md={7} lg={5} item className="w-full my-1 sm:my-0 px-1">
        <ActionButton.Edit component={Link} to={`/admin/users/${user._id}/edit`} className="w-full">
          {translations.editButton}
        </ActionButton.Edit>
      </Grid>
    </Grid>
  </Grid>
);

export default UserActionsView;
