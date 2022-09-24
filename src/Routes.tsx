import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
  RouteObject,
} from 'react-router-dom';

import { createRoutes } from 'common/utils/routeUtils';
import { IRoute } from 'common/types';
import { HomeRoute } from 'pages/Home/Routes';
import { AboutRoute } from 'pages/About/Routes';

const PublicRoutes: IRoute[] = [HomeRoute, AboutRoute];
const ProtectedRoutes: IRoute[] = [];

const App = () => {
  const loggedIn = false;
  const appRoutes: RouteObject[] = createRoutes(
    { PublicRoutes, ProtectedRoutes },
    loggedIn,
  );
  return useRoutes(appRoutes);
};
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
