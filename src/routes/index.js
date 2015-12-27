import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import MapLayout from 'layouts/MapLayout';
import HomeView from 'views/HomeView';
import ProfileView from 'views/ProfileView';
import CoworkProfileView from 'views/coworks/ProfileView';
import CoworkListView from 'views/coworks/ListView';

import DefaultView from 'views/DefaultView';
import AboutView from 'views/AboutView';

export default (
  <Route>
    <Route path='/' component={MapLayout}>
      <IndexRoute component={HomeView}/>
    </Route>
    <Route path='/' component={CoreLayout}>
      <Route path='/profile' component={ProfileView}/>
      <Route path='coworks' component={CoworkListView}/>
      <Route path='cowork/:name' component={CoworkProfileView}/>
      <Route path='/default' component={DefaultView}/>
      <Route path='/about' component={AboutView}/>
    </Route>
  </Route>
);
