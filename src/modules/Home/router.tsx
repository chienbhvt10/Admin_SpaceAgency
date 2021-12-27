import { CommonPath } from 'commons/base-routes';
import UserPage from 'modules/User/pages/list';
import { RouteObject } from 'react-router-dom';
import HomePage from './pages/Home';

export const homeRouter: RouteObject = {
  path: '/',
  element: <HomePage />,
  children: [],
};
