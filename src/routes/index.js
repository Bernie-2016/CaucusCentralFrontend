import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import AdminLayout           from 'layouts/admin/AdminLayout';
import CaptainLayout         from 'layouts/captain/CaptainLayout';

import SignUpView            from 'views/sign-up/SignUpView';
import SignInView            from 'views/sign-in/SignInView';
import StatesView            from 'views/admin/StatesView';
import PrecinctsView         from 'views/admin/PrecinctsView';
import UsersView             from 'views/admin/UsersView';
import UsersNewView          from 'views/admin/UsersNewView';
import DashboardView         from 'views/captain/DashboardView';
import ProfileView           from 'views/profile/ProfileView';
import ProfileEditView       from 'views/profile/ProfileEditView';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={SignInView} />
    <Route component={SignUpView} path='/signup/:token' />
    <Route component={CaptainLayout} path='/captain'>
      <IndexRoute component={DashboardView} />
      <Route component={ProfileView} path='/captain/profile' />
      <Route component={ProfileEditView} path='/captain/profile/edit' />
    </Route>
    <Route component={AdminLayout}  path='/admin'>
      <IndexRoute component={StatesView} />
      <Route component={PrecinctsView} path='/admin/states/:code' />
      <Route component={UsersView} path='/admin/users' />
      <Route component={UsersNewView} path='/admin/users/new' />
      <Route component={ProfileView} path='/admin/profile' />
      <Route component={ProfileEditView} path='/admin/profile/edit' />
    </Route>
  </Route>
);
