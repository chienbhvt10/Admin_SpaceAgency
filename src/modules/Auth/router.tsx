import { RouteObject } from 'react-router-dom';
import LoginPage from './pages/Login';

export const authRouter: RouteObject = {
  path: '/login',
  element: <LoginPage />,
  children: [],
};
