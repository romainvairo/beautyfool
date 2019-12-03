import React from 'react';
import { Route, Switch } from 'react-router-dom';

// guest routes
import Home from '../../Pages/Home';
import PageNotFound from '../../Pages/PageNotFound';
// user routes
import Login from '../../Pages/Login';
import Signup from '../../Pages/Signup';
import News from '../../Pages/News';
// admin routes
import Admin from '../../Pages/Admin';
import AdminActualities from '../../Pages/Admin/Actualities';
import AdminActualitiesAdd from '../../Pages/Admin/Actualities/Add';
import AdminActualitiesEdit from '../../Pages/Admin/Actualities/Edit';
import AdminActualitiesGetOne from '../../Pages/Admin/Actualities/GetOne';

import AdminBeautyTips from '../../Pages/Admin/BeautyTips';
import AdminBeautyTipsAdd from '../../Pages/Admin/BeautyTips/Add';
import AdminBeautyTipsEdit from '../../Pages/Admin/BeautyTips/Edit';
import AdminBeautyTipsGetOne from '../../Pages/Admin/BeautyTips/GetOne';

import AdminBenefits from '../../Pages/Admin/Benefits';
import AdminBenefitsAdd from '../../Pages/Admin/Benefits/Add';
import AdminBenefitsEdit from '../../Pages/Admin/Benefits/Edit';
import AdminBenefitsGetOne from '../../Pages/Admin/Benefits/GetOne';

import AdminCalendar from '../../Pages/Admin/Calendar';
import AdminCalendarAdd from '../../Pages/Admin/Calendar/Add';
import AdminCalendarEdit from '../../Pages/Admin/Calendar/Edit';
import AdminCalendarGetOne from '../../Pages/Admin/Calendar/GetOne';

import AdminComments from '../../Pages/Admin/Comments';
import AdminCommentsAdd from '../../Pages/Admin/Comments/Add';
import AdminCommentsEdit from '../../Pages/Admin/Comments/Edit';
import AdminCommentsGetOne from '../../Pages/Admin/Comments/GetOne';

import AdminFeedbacks from '../../Pages/Admin/Feedbacks';
import AdminFeedbacksAdd from '../../Pages/Admin/Feedbacks/Add';
import AdminFeedbacksEdit from '../../Pages/Admin/Feedbacks/Edit';
import AdminFeedbacksGetOne from '../../Pages/Admin/Feedbacks/GetOne';

import AdminGallery from '../../Pages/Admin/Gallery';
import AdminGalleryAdd from '../../Pages/Admin/Gallery/Add';
import AdminGalleryEdit from '../../Pages/Admin/Gallery/Edit';
import AdminGalleryGetOne from '../../Pages/Admin/Gallery/GetOne';

import AdminUsers from '../../Pages/Admin/Users';
import AdminUsersAdd from '../../Pages/Admin/Users/Add';
import AdminUsersEdit from '../../Pages/Admin/Users/Edit';
import AdminUsersGetOne from '../../Pages/Admin/Users/GetOne';

import AdminNewsletter from '../../Pages/Admin/Newsletter';

const Router = () => (
  <Switch>
    {/* guest routes */}

    {/* If the path in the browser matches one of the pathes it will render the component Home */}
    <Route exact path={['/', '/home', '/accueil']} component={Home} />

    {/* user routes */}
    <Route exact path={['/login', '/connexion']} component={Login} />
    <Route exact path={['/signup', '/inscription']} component={Signup} />
    <Route exact path={['/news', '/actualités']} component={News} />


    {/* admin routes */}
    <Route exact path="/admin" component={Admin} />
    <Route exact path={['/admin/actualities/:page?', '/admin/actualites/:page?']} component={AdminActualities} />
    <Route exact path={['/admin/actualities/add', '/admin/actualites/add']} component={AdminActualitiesAdd} />
    <Route exact path={['/admin/actualities/:id', '/admin/actualites/:id']} component={AdminActualitiesGetOne} />
    <Route exact path={['/admin/actualities/:id/edit', '/admin/actualites/:id/edit']} component={AdminActualitiesEdit} />

    <Route exact path={['/admin/calendar/:page?', '/admin/calendrier/:page?']} component={AdminCalendar} />
    <Route exact path={['/admin/calendar/add', '/admin/calendrier/add']} component={AdminCalendarAdd} />
    <Route exact path={['/admin/calendar/:id', '/admin/calendrier/:id']} component={AdminCalendarGetOne} />
    <Route exact path={['/admin/calendar/:id/edit', '/admin/calendrier/:id/edit']} component={AdminCalendarEdit} />

    <Route exact path={['/admin/services/:page?', '/admin/prestations/:page?']} component={AdminBenefits} />
    <Route exact path={['/admin/services/add', '/admin/prestations/add']} component={AdminBenefitsAdd} />
    <Route exact path={['/admin/services/:id', '/admin/prestations/:id']} component={AdminBenefitsGetOne} />
    <Route exact path={['/admin/services/:id/edit', '/admin/prestations/:id/edit']} component={AdminBenefitsEdit} />

    <Route exact path={['/admin/users/:page?', '/admin/utilisateurs/:page?']} component={AdminUsers} />
    <Route exact path={['/admin/users/add', '/admin/utilisateurs/add']} component={AdminUsersAdd} />
    <Route exact path={['/admin/users/:id', '/admin/utilisateurs/:id']} component={AdminUsersGetOne} />
    <Route exact path={['/admin/users/:id/edit', '/admin/utilisateurs/:id/edit']} component={AdminUsersEdit} />

    <Route exact path={['/admin/feedbacks/:page?', '/admin/avis/:page?']} component={AdminFeedbacks} />
    <Route exact path={['/admin/feedbacks/add', '/admin/avis/add']} component={AdminFeedbacksAdd} />
    <Route exact path={['/admin/feedbacks/:id', '/admin/avis/:id']} component={AdminFeedbacksGetOne} />
    <Route exact path={['/admin/feedbacks/:id/edit', '/admin/avis/:id/edit']} component={AdminFeedbacksEdit} />

    <Route exact path={['/admin/comments/:page?', '/admin/commentaires/:page?']} component={AdminComments} />
    <Route exact path={['/admin/comments/add', '/admin/commentaires/add']} component={AdminCommentsAdd} />
    <Route exact path={['/admin/comments/:id', '/admin/commentaires/:id']} component={AdminCommentsGetOne} />
    <Route exact path={['/admin/comments/:id/edit', '/admin/commentaires/:id/edit']} component={AdminCommentsEdit} />

    <Route exact path={['/admin/gallery/:page?', '/admin/galerie/:page?']} component={AdminGallery} />
    <Route exact path={['/admin/gallery/add', '/admin/galerie/add']} component={AdminGalleryAdd} />
    <Route exact path={['/admin/gallery/:id', '/admin/galerie/:id']} component={AdminGalleryGetOne} />
    <Route exact path={['/admin/gallery/:id/edit', '/admin/galerie/:id/edit']} component={AdminGalleryEdit} />

    <Route exact path={['/admin/beauty-tips/:page?', '/admin/astuces-beaute/:page?']} component={AdminBeautyTips} />
    <Route exact path={['/admin/beauty-tips/add', '/admin/astuces-beaute/add']} component={AdminBeautyTipsAdd} />
    <Route exact path={['/admin/beauty-tips/:id', '/admin/astuces-beaute/:id']} component={AdminBeautyTipsGetOne} />
    <Route exact path={['/admin/beauty-tips/:id/edit', '/admin/astuces-beaute/:id/edit']} component={AdminBeautyTipsEdit} />

    <Route exact path={['/admin/newsletter', '/admin/newsletter']} component={AdminNewsletter} />

    {/* This route must stay the last to handle the cases of page not found */}
    <Route component={PageNotFound} />
  </Switch>
);

export default Router;
