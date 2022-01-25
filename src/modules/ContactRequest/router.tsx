import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router';
import ContactRequestPage from './pages/list';

export const contactRequestRouter: RouteObject = {
  path: CommonPath.CONTACT_REQUEST,
  element: <ContactRequestPage />,
};
