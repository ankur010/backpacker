import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';

import { IRoute } from 'common/types';

type AppRoutes = {
  PublicRoutes: IRoute[];
  ProtectedRoutes: IRoute[];
};

export const createRoutes = (routes: AppRoutes, isLoggedIn: boolean) => {
  const { PublicRoutes, ProtectedRoutes } = routes;
  const allRoutes: RouteObject[] = [];

  PublicRoutes.map(
    ({ element: Element, layout: Layout, path, subRoutes = [] }) => {
      allRoutes.push({
        path,
        element: (
          <Layout>
            <Element />
          </Layout>
        ),
        children: subRoutes,
      });
    },
  );
  ProtectedRoutes.map(
    ({ element: Element, layout: Layout, path, subRoutes = [] }) => {
      allRoutes.push({
        path,
        element: isLoggedIn ? (
          <Layout>
            <Element />
          </Layout>
        ) : (
          <Navigate to="/sign-in" />
        ),
        children: subRoutes,
      });
    },
  );
  return allRoutes;
};
