import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router-dom';
import UserPage from './pages/list';
import NewUser from './pages/new';
import DetailUser from './pages/details/index';

export const userRouter: RouteObject = {
  path: '/user-management/',
  element: <UserPage />,
};
export const newUserRouter: RouteObject = {
  path: '/user-management/new',
  element: <NewUser />,
};
export const detailUserRouter: RouteObject = {
  path: '/user-management/detail/:id',
  element: <DetailUser />,
};
