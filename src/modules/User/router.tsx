import { RouteObject } from 'react-router-dom';
import UserPage from './pages';

export const userRouter: RouteObject = {
  path: '/user/',
  element: <UserPage />,
  children: [],
};
