import { RouteObject } from 'react-router-dom';
import MaterialCollectionPage from './pages/list';

export const materialCollectionRouter: RouteObject = {
  path: '/material-collection/',
  element: <MaterialCollectionPage />,
};
