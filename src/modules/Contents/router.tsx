import { RouteObject } from 'react-router-dom';
import ContentPage from './pages/list';

export const contentRouter: RouteObject = {
  path: '/content',
  element: <ContentPage />,
};
