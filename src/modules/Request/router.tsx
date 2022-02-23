import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router';
import RequestStatusUpdate from './pages/detail';
import ContactRequestPage from './pages/list';

export const contactRequestRouter: RouteObject = {
  path: CommonPath.CONTACT_REQUEST,
  element: <ContactRequestPage />,
};

export const contactRequestDetailRouter: RouteObject = {
  path: CommonPath.CONTACT_REQUEST_DETAIL,
  element: <RequestStatusUpdate />,
};
