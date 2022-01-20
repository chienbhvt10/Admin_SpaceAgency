import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router-dom';
import StyleCollectionDetail from './pages/detail';
import StyleCollectionPage from './pages/list';
import NewStyleCollection from './pages/new';

export const styleCollectionRouter: RouteObject = {
  path: CommonPath.STYLES_COLLECTION,
  element: <StyleCollectionPage />,
};

export const newStyleCollectionRouter: RouteObject = {
  path: CommonPath.STYLES_COLLECTION_NEW,
  element: <NewStyleCollection />,
};
export const styleCollectionDetailRouter: RouteObject = {
  path: CommonPath.STYLES_COLLECTION_DETAIL,
  element: <StyleCollectionDetail />,
};
