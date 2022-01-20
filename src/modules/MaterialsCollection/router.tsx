import { RouteObject } from 'react-router-dom';
import MaterialCreateNew from './pages/new';
import MaterialUpdate from './pages/detail';
import MaterialCollectionPage from './pages/list';
import { CommonPath } from 'commons/base-routes';

export const materialCollectionRouter: RouteObject = {
  path: CommonPath.MATERIAL_COLLECTION,
  element: <MaterialCollectionPage />,
};

export const newMaterialCollectionRouter: RouteObject = {
  path: CommonPath.MATERIAL_COLLECTION_NEW,
  element: <MaterialCreateNew />,
};
export const updateMaterialCollectionRouter: RouteObject = {
  path: CommonPath.MATERIAL_COLLECTION_DETAIL,
  element: <MaterialUpdate />,
};
