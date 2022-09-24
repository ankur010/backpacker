import { IRoute } from 'common/types';
import SimpleLayout from 'layouts/SimpleLayout';

import About from './About';

export const AboutRoute: IRoute = {
  path: '/about',
  element: About,
  layout: SimpleLayout,
  exact: true,
};
