import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { roles } from '../../../data';
import ProtectedRoute from '../../Shared/ProtectedRoute';
// guest routes
import Home from '../../Pages/Home';
import PageNotFound from '../../Pages/PageNotFound';
import Gallery from '../../Pages/Gallery';
import Benefits from '../../Pages/Benefits';
import BeautyTips from '../../Pages/BeautyTips';
import News from '../../Pages/News';
import Profile from '../../Pages/Profile';
import Contact from '../../Pages/Contact';
import TermsOfSales from '../../Pages/TermsOfSales';
import TermsOfServices from '../../Pages/TermsOfServices';
import LegalNotices from '../../Pages/LegalNotices';
import Presentation from '../../Pages/Presentation';
import EditProfile from '../../Pages/Profile/EditProfile';
import Sitemap from '../../Pages/Sitemap';
import FAQ from '../../Pages/FAQ';
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
    {/* If the path in the browser matches one of the pathes it will render the component Home */}
    <Route exact path={['/', '/home', '/accueil']} component={Home} />
    <Route exact path={['/gallery', '/galerie']} component={Gallery} />
    <Route exact path={['/benefits', '/prestations']} component={Benefits} />
    <Route exact path={['/news', '/actualités']} component={News} />
    <Route exact path={['/beauty-tips', '/astuces-beaute']} component={BeautyTips} />
    <Route exact path={['/contact']} component={Contact} />
    <ProtectedRoute role={roles.user} exact path={['/profil', '/profile']} component={Profile} />
    <Route exact path={['/legal-notices', '/mentions-legales']} component={LegalNotices} />
    <Route exact path={['/terms-of-sales', '/conditions-generales-de-vente']} component={TermsOfSales} />
    <Route exact path={['/terms-of-services', '/conditions-generales-utilisation']} component={TermsOfServices} />
    <Route exact path={['/presentation']} component={Presentation} />
    <ProtectedRoute role={roles.user} exact path={['/profile/edit-profile', '/profile/modification-profile']} component={EditProfile} />
    <Route exact path={['/sitemap', '/plan-du-site']} component={Sitemap} />
    <Route exact path={['/faq']} component={FAQ} />

    {/* user routes */}
    <Route exact path={['/login', '/connexion']} component={Login} />
    <Route exact path={['/signup', '/inscription']} component={Signup} />

    {/* admin routes */}
    <ProtectedRoute role={roles.admin} exact path="/admin" component={Admin} />
    <ProtectedRoute role={roles.admin} exact path={['/admin/:category/add', '/admin/:category/add']} component={AdminListsAdd} />
    <ProtectedRoute role={roles.admin} exact path={['/admin/:category/:id', '/admin/:category/:id']} component={AdminListsGetOne} />
    <ProtectedRoute role={roles.admin} exact path={['/admin/:category/:id/edit', '/admin/:category/:id/edit']} component={AdminListsEdit} />
    <ProtectedRoute role={roles.admin} exact path={['/admin/:category/:page?', '/admin/:category/:page?']} component={AdminListsGetAll} />

    <ProtectedRoute role={roles.admin} exact path={['/admin/newsletter', '/admin/newsletter']} component={AdminNewsletter} />

    {/* This route must stay the last to handle the cases of page not found */}
    <Route component={PageNotFound} />
  </Switch>
);

export default Router;
