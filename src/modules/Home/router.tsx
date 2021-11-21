import { RouteObject } from 'react-router-dom';
import HomePage from './pages/Home';

export const homeRouter: RouteObject = {
  path: '/',
  element: <HomePage />,
  children: [],
};
