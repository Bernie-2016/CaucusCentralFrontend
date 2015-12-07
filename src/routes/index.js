import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import AboutView             from 'views/AboutView';
import AdminView             from 'views/admin/AdminView';
import AdminDashboardView    from 'views/admin/admin-dashboard/AdminDashboardView';

export default (
  <Route        component={CoreLayout} path='/'>
    <IndexRoute component={HomeView} />
    <Route      component={AboutView}  path='/about' />
    <Route      component={AdminView}  path='/admin'>
      <IndexRoute component={AdminDashboardView} />
    </Route>
  </Route>
);
