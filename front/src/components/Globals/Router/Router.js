import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../Pages/Home';
import PageNotFound from '../../Pages/PageNotFound';

const Router = () => (
  <Switch>
    {/* guest routes */}

    {/* If the path in the browser matches one of the pathes it will render the component Home */}
    <Route exact path={['/', '/home', '/accueil']} component={Home} />
    
    {/* This route must stay the last to handle the cases of page not found */}
    <Route component={PageNotFound} />
  </Switch>
);

export default Router;
