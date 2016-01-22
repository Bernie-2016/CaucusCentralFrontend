import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import AdminLayout           from 'layouts/admin/AdminLayout';
import CaptainLayout         from 'layouts/captain/CaptainLayout';

import SignUpView            from 'views/sign-up/SignUpView';
import SignInView            from 'views/sign-in/SignInView';
import ForgotView            from 'views/reset/ForgotView';
import ResetView             from 'views/reset/ResetView';
import ReportView            from 'views/report/ReportView';
import StatesView            from 'views/admin/StatesView';
import PrecinctsView         from 'views/admin/PrecinctsView';
import PrecinctView          from 'views/admin/PrecinctView';
import PrecinctEditView      from 'views/admin/PrecinctEditView';
import UsersView             from 'views/admin/UsersView';
import UserNewView           from 'views/admin/UserNewView';
import UsersImportView       from 'views/admin/UsersImportView';
import UserView              from 'views/admin/UserView';
import UserEditView          from 'views/admin/UserEditView';
import DashboardView         from 'views/captain/DashboardView';
import HelpView              from 'views/captain/HelpView';
import ProfileView           from 'views/profile/ProfileView';
import ProfileEditView       from 'views/profile/ProfileEditView';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={SignInView} />
    <Route component={SignUpView} path='/signup/:token' />
    <Route component={ResetView} path='/reset/:token' />
    <Route component={ForgotView} path='/forgot' />
    <Route component={ReportView} path='/report' />
    <Route component={CaptainLayout} path='/captain'>
      <IndexRoute component={DashboardView} />
      <Route component={HelpView} path='/captain/help' />
      <Route component={ProfileView} path='/captain/profile' />
      <Route component={ProfileEditView} path='/captain/profile/edit' />
    </Route>
    <Route component={AdminLayout}  path='/admin'>
      <IndexRoute component={StatesView} />
      <Route component={PrecinctsView} path='/admin/states/:code' />
      <Route component={PrecinctView} path='/admin/states/:code/precincts/:id' />
      <Route component={PrecinctEditView} path='/admin/states/:code/precincts/:id/edit' />
      <Route component={UsersView} path='/admin/users' />
      <Route component={UserNewView} path='/admin/users/new' />
      <Route component={UsersImportView} path='/admin/users/import' />
      <Route component={UserView} path='/admin/users/:id' />
      <Route component={UserEditView} path='/admin/users/:id/edit' />
      <Route component={ProfileView} path='/admin/profile' />
      <Route component={ProfileEditView} path='/admin/profile/edit' />
    </Route>
  </Route>
);
