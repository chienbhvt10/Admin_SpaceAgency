import { RouteObject } from 'react-router-dom';
import MaterialCreateNew from './pages/new';
import MaterialUpdate from './pages/detail';
import MaterialCollectionPage from './pages/list';

export const materialCollectionRouter: RouteObject = {
  path: '/material-collection/',
  element: <MaterialCollectionPage />,
};

export const newMaterialCollectionRouter: RouteObject = {
  path: '/material-collection/new',
  element: <MaterialCreateNew />,
};
export const updateMaterialCollectionlRouter: RouteObject = {
  path: '/material-collection/update/:id',
  element: <MaterialUpdate />,
};