import { IRoute } from 'common/types';
import SimpleLayout from 'layouts/SimpleLayout';

import Home from './Home';

export const HomeRoute: IRoute = {
  path: '/',
  element: Home,
  layout: SimpleLayout,
  exact: true,
};
