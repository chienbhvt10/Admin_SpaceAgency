import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router-dom';
import UserPage from './pages/list';
import NewUser from './pages/new';
import DetailUser from './pages/details/index';

export const userRouter: RouteObject = {
  path: '/user',
  element: <UserPage />,
};
export const newUserRouter: RouteObject = {
  path: '/user/new',
  element: <NewUser />,
};
export const detailUserRouter: RouteObject = {
  path: '/user/detail/:id',
  element: <DetailUser />,
};
