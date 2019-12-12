import React from 'react';
import { Grid } from '@material-ui/core';

import './ListsGetAll.scss';
import SearchOptionsPanel from '../../SearchOptionsPanel';
import Foolist from '../../../../Shared/Foolist';
import ComposerItemGetAll from './ComposerItemGetAll';

const ListsGetAllView = ({
  translations,
  onPageChange,
  onScroll,
  page,
  lastPage,
  list,
  DeleteSnackbar,
  callDeleteRequest,
  GetSnackbar,
  ChildrenComponent
}) => (
  <Grid container justify="space-around" className="list-container">
    <DeleteSnackbar />
    <GetSnackbar />
    <Foolist
      page={page}
      lastPage={lastPage}
      onPageChange={onPageChange}
      title={translations.title}
      onScroll={onScroll}
    >
      {list.map(item => (
        <ComposerItemGetAll
          key={item._id}
          item={item}
          callDeleteRequest={callDeleteRequest}
          render={ChildrenComponent}
        />
      ))}
    </Foolist>
    <SearchOptionsPanel />
  </Grid>
);

export default ListsGetAllView;
