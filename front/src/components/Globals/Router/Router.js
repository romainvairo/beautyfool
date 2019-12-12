import React from 'react';
import { Route, Switch } from 'react-router-dom';

// guest routes
import Home from '../../Pages/Home';
import PageNotFound from '../../Pages/PageNotFound';
import Gallery from '../../Pages/Gallery';
import Benefits from '../../Pages/Benefits';
import BeautyTips from '../../Pages/BeautyTips';
import News from '../../Pages/News';
// user routes
import Login from '../../Pages/Login';
import Signup from '../../Pages/Signup';
// admin routes
import Admin from '../../Pages/Admin';
import AdminListsGetAll from '../../Pages/Admin/Lists/GetAll';
import AdminListsAdd from '../../Pages/Admin/Lists/Add';
import AdminListsEdit from '../../Pages/Admin/Lists/Edit';
import AdminListsGetOne from '../../Pages/Admin/Lists/GetOne';

import AdminNewsletter from '../../Pages/Admin/Newsletter';

const Router = () => (
  <Switch>
    {/* guest routes */}
    <Route exact path={['/gallery', '/galerie']} component={Gallery} />
    <Route exact path={['/benefits', '/prestations']} component={Benefits} />
    <Route exact path={['/news', '/actualités']} component={News} />
    <Route exact path={['/beauty-tips', '/astuces-beaute']} component={BeautyTips} />

    {/* If the path in the browser matches one of the pathes it will render the component Home */}
    <Route exact path={['/', '/home', '/accueil']} component={Home} />

    {/* user routes */}
    <Route exact path={['/login', '/connexion']} component={Login} />
    <Route exact path={['/signup', '/inscription']} component={Signup} />

    {/* admin routes */}
    <Route exact path="/admin" component={Admin} />
    <Route exact path={['/admin/:category/:page?', '/admin/:category/:page?']} component={AdminListsGetAll} />
    <Route exact path={['/admin/:category/add', '/admin/:category/add']} component={AdminListsAdd} />
    <Route exact path={['/admin/:category/:id', '/admin/:category/:id']} component={AdminListsGetOne} />
    <Route exact path={['/admin/:category/:id/edit', '/admin/:category/:id/edit']} component={AdminListsEdit} />

    <Route exact path={['/admin/newsletter', '/admin/newsletter']} component={AdminNewsletter} />

    {/* This route must stay the last to handle the cases of page not found */}
    <Route component={PageNotFound} />
  </Switch>
);

export default Router;
