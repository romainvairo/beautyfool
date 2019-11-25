import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from '../Router';
import AsyncComponent from '../../Shared/AsyncComponent';

const Navbar = () => import(/* webpackChunkName: "Navbar" */ '../Navbar');

const AppView = () => (
  <BrowserRouter>
    <>
      <AsyncComponent name="Navbar" moduleProvider={Navbar} fallback={false} />
      <Router />
    </>
  </BrowserRouter>
);

export default AppView;
