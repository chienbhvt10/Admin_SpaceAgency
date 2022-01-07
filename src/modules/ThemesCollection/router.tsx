import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router-dom';
import ThemeCollectionPage from './pages/list';

export const themeCollectionRouter: RouteObject = {
  path: '/themes-collection/',
  element: <ThemeCollectionPage />,
};
