import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router';
import ContactRequestPage from './pages/list';
import RequestsCreateNew from './pages/new';

export const contactRequestRouter: RouteObject = {
  path: CommonPath.CONTACT_REQUEST,
  element: <ContactRequestPage />,
};
export const contactRequestNewRouter: RouteObject = {
  path: CommonPath.CONTACT_REQUEST_NEW,
  element: <RequestsCreateNew />,
};
