import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from '../Router';

const AppView = () => (
  <BrowserRouter>
    <>
      {/* <AsyncComponent name="Navbar" moduleProvider={Navbar} fallback={false} /> */}
      <Router />
    </>
  </BrowserRouter>
);

export default AppView;
