import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router-dom';
import UserPage from './pages/list';
import NewUser from './pages/new';

export const userRouter: RouteObject = {
  path: CommonPath.USERS_PATH,
  element: <UserPage />,
};
export const newUserRouter: RouteObject = {
  path: CommonPath.USERS_PATH_NEW,
  element: <NewUser />,
};
