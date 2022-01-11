import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router-dom';
import ThemesUpdate from './pages/detail';
import ThemeCollectionPage from './pages/list';
import ThemesCreateNew from './pages/new';

export const themeCollectionRouter: RouteObject = {
  path: '/themes-collection/',
  element: <ThemeCollectionPage />,
};
export const createThemeCreateRouter: RouteObject = {
  path: '/themes-collection/new',
  element: <ThemesCreateNew />,
};
export const updateThemeRouter: RouteObject = {
  path: '/themes-collection/update/:id',
  element: <ThemesUpdate />,
};