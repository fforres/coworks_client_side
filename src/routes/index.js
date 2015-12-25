import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import HomeView from 'views/HomeView';
import DefaultView from 'views/DefaultView';
import AboutView from 'views/AboutView';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={HomeView} />
    <Route component={DefaultView} path='/default' />
    <Route component={AboutView} path='/about' />
  </Route>
);
