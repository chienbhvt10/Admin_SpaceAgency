import { RouteObject } from 'react-router';
import AppointmentRequestPage from './pages/list';
export const appointmentRequestRouter: RouteObject = {
  path: '/appointments-request/',
  element: <AppointmentRequestPage />,
};
