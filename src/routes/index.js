import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import AboutView             from 'views/AboutView';

import CaptainLayout         from 'layouts/captain/CaptainLayout';
import CaptainDashboardView  from 'views/captain/dashboard/CaptainDashboardView';

export default (
  <Route        component={CoreLayout} path='/'>
    <IndexRoute component={HomeView} />
    <Route      component={AboutView}  path='/about' />
    <Route      component={CaptainLayout} path='captain'>
        <Route      component={undefined} path='/login' />
        <Route      component={undefined} path='/verify/:key' />
        <Route      component={CaptainDashboardView} path='dashboard' />
    </Route>
  </Route>
);
