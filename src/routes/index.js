import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import AdminLayout           from 'layouts/admin/AdminLayout';
import CaptainLayout         from 'layouts/captain/CaptainLayout';

import SignInView            from 'views/sign-in/SignInView';
import PrecinctsView         from 'views/admin/PrecinctsView';
import UsersView             from 'views/admin/UsersView';
import CaptainDashboardView  from 'views/captain/dashboard/CaptainDashboardView';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={SignInView} />
    <Route component={CaptainLayout} path='captain'>
      <IndexRoute component={CaptainDashboardView} />
    </Route>
    <Route component={AdminLayout}  path='/admin'>
      <IndexRoute component={PrecinctsView} />
      <Route component={UsersView} path='/admin/users' />
    </Route>
  </Route>
);
