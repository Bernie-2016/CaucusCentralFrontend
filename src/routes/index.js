import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import AboutView             from 'views/AboutView';

export default (
  <Route        component={CoreLayout} path='/'>
    <IndexRoute component={HomeView} />
    <Route      component={AboutView}  path='/about' />
    <Route      component={undefined} path='captain'>
        <Route      component={undefined} path='/login' />
        <Route      component={undefined} path='/verify/:key' />
        <Route      component={undefined} path='/prepare' />
        <Route      component={undefined} path='/how-to-use' />
        <Route      component={undefined} path='/dashboard'>
            <Route      component={undefined} path='/live'/>
        </Route>
    </Route>
  </Route>
);
