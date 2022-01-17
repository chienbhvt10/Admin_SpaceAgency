import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router';
import DetailUserManagement from './pages/details';
import ListUserManagement from './pages/list';

export const userManagementRouter: RouteObject = {
  path: CommonPath.USERS_MANAGEMENT,
  element: <ListUserManagement />,
};
export const detailUserManagementRouter: RouteObject = {
  path: CommonPath.USERS_MANAGEMENT_DETAIL,
  element: <DetailUserManagement />,
};
