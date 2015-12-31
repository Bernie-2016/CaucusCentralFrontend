import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import AboutView             from 'views/AboutView';
import AdminView             from 'views/admin/AdminView';
import AdminDashboardView    from 'views/admin/admin-dashboard/AdminDashboardView';
import AdminUserAdministrationView  from 'views/admin/admin-user-administration/AdminUserAdministrationView';

import CaptainLayout         from 'layouts/captain/CaptainLayout';
import CaptainDashboardLiveView from 'views/captain/dashboard/CaptainDashboardLiveView';

export default (
  <Route        component={CoreLayout} path='/'>
    <IndexRoute component={HomeView} />
    <Route      component={AboutView}  path='/about' />
    <Route      component={CaptainLayout} path='captain'>
        <Route      component={undefined} path='/login' />
        <Route      component={undefined} path='/verify/:key' />
        <Route      component={undefined} path='/prepare' />
        <Route      component={undefined} path='/how-to-use' />
        <Route      component={undefined} path='/dashboard' />
        <Route      component={CaptainDashboardLiveView} path='live'/>
    </Route>
    <Route      component={AdminView}  path='/admin'>
      <IndexRoute component={AdminDashboardView} />
      <Route component={AdminUserAdministrationView} path='/admin/users' />
    </Route>
  </Route>
);
