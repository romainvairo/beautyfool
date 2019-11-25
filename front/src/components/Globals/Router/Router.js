import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './PageProviders';

const Router = () => (
  <Switch>
    {/* guest routes */}

    {/* If the path in the browser matches one of the pathes it will render the component Home */}
    <Route exact path={['/', '/home', '/accueil']} component={Home} />
  </Switch>
);

export default Router;
