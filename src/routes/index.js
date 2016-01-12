import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import SignInView            from 'views/sign-in/SignInView';
import AdminDashboardView    from 'views/admin/admin-dashboard/AdminDashboardView';
import AdminUserAdministrationView  from 'views/admin/admin-user-administration/AdminUserAdministrationView';

import AdminLayout           from 'layouts/admin/AdminLayout';
import CaptainLayout         from 'layouts/captain/CaptainLayout';
import CaptainDashboardView  from 'views/captain/dashboard/CaptainDashboardView';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={SignInView} />
    <Route component={CaptainLayout} path='captain'>
      <IndexRoute component={CaptainDashboardView} />
    </Route>
    <Route component={AdminLayout}  path='/admin'>
      <IndexRoute component={AdminDashboardView} />
      <Route component={AdminUserAdministrationView} path='/admin/users' />
    </Route>
  </Route>
);
