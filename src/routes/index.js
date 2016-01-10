import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import SignIn              from 'views/sign-in';
import AdminView             from 'views/admin/AdminView';
import AdminDashboardView    from 'views/admin/admin-dashboard/AdminDashboardView';
import AdminUserAdministrationView  from 'views/admin/admin-user-administration/AdminUserAdministrationView';

import CaptainLayout         from 'layouts/captain/CaptainLayout';
import CaptainDashboardView  from 'views/captain/dashboard/CaptainDashboardView';

export default (
  <Route        component={CoreLayout} path='/'>
    <IndexRoute component={SignIn} />
    <Route      component={CaptainLayout} path='captain'>
        <Route      component={undefined} path='/login' />
        <Route      component={undefined} path='/verify/:key' />
        <Route      component={CaptainDashboardView} path='dashboard' />
    </Route>
    <Route      component={AdminView}  path='/admin'>
      <IndexRoute component={AdminDashboardView} />
      <Route component={AdminUserAdministrationView} path='/admin/users' />
    </Route>
  </Route>
);
