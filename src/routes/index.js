import React                 from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout            from 'layouts/CoreLayout';
import AdminLayout           from 'layouts/AdminLayout';
import CaptainLayout         from 'layouts/CaptainLayout';
import HomeLayout            from 'layouts/HomeLayout';

import HomeView              from 'views/HomeView';
import SignUpView            from 'views/sign-up/SignUpView';
import SignInView            from 'views/sign-in/SignInView';
import ForgotView            from 'views/reset/ForgotView';
import ResetView             from 'views/reset/ResetView';
import ReportView            from 'views/report/ReportView';
import HowToView             from 'views/report/HowToView';
import StatesView            from 'views/admin/StatesView';
import PrecinctsView         from 'views/admin/precincts/PrecinctsView';
import PrecinctView          from 'views/admin/precincts/PrecinctView';
import PrecinctEditView      from 'views/admin/precincts/PrecinctEditView';
import ReportNewView         from 'views/admin/reports/ReportNewView';
import ReportEditView        from 'views/admin/reports/ReportEditView';
import UsersView             from 'views/admin/users/UsersView';
import UserNewView           from 'views/admin/users/UserNewView';
import UsersImportView       from 'views/admin/users/UsersImportView';
import UserView              from 'views/admin/users/UserView';
import UserEditView          from 'views/admin/users/UserEditView';
import InvitationsView       from 'views/admin/invitations/InvitationsView';
import AuditsView            from 'views/admin/audits/AuditsView';
import DashboardView         from 'views/captain/DashboardView';
import HelpView              from 'views/captain/HelpView';
import ProfileView           from 'views/profile/ProfileView';
import ProfileEditView       from 'views/profile/ProfileEditView';

export default (
  <Route component={CoreLayout} path='/'>
    <Route component={HomeLayout}>
      <IndexRoute component={HomeView} />
      <Route component={SignInView} path='/signin' />
      <Route component={SignUpView} path='/signup/:token' />
      <Route component={ResetView} path='/reset/:token' />
      <Route component={ForgotView} path='/forgot' />
      <Route component={ReportView} path='/report' />
      <Route component={HowToView} path='/report/how' />
    </Route>
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
      <Route component={ReportNewView} path='/admin/states/:code/precincts/:id/report' />
      <Route component={ReportEditView} path='/admin/states/:code/precincts/:precinctid/reports/:id' />
      <Route component={UsersView} path='/admin/users' />
      <Route component={UserNewView} path='/admin/users/new' />
      <Route component={UsersImportView} path='/admin/users/import' />
      <Route component={UserView} path='/admin/users/:id' />
      <Route component={UserEditView} path='/admin/users/:id/edit' />
      <Route component={InvitationsView} path='/admin/invitations' />
      <Route component={AuditsView} path='/admin/audits' />
      <Route component={ProfileView} path='/admin/profile' />
      <Route component={ProfileEditView} path='/admin/profile/edit' />
    </Route>
  </Route>
);
