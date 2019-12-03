import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import ActionButton from '../../../../../../Shared/ActionButton';

const UserActionsView = ({ translations, user, callDeleteRequest, editAction, redirection }) => (
  <Grid xs={12} sm={4} item>
    { redirection && <Redirect to={redirection} /> }
    <Grid container className="items-end justify-end sm:flex-col">
      <Grid xs={6} sm={9} md={7} lg={5} item className="my-1 sm:my-0 px-1 sm:mb-3 w-full">
        <ActionButton.Delete onClick={callDeleteRequest(user)} className="w-full">{translations.deleteButton}</ActionButton.Delete>
      </Grid>
      <Grid xs={6} sm={9} md={7} lg={5} item className="w-full my-1 sm:my-0 px-1">
        <ActionButton.Edit onClick={editAction(user)} className="w-full">
          {translations.editButton}
        </ActionButton.Edit>
      </Grid>
    </Grid>
  </Grid>
);

export default UserActionsView;
