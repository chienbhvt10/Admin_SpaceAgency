import { RouteObject } from 'react-router-dom';
import StyleCollectionDetail from './pages/detail';
import StyleCollectionPage from './pages/list';
import NewStyleCollection from './pages/new';

export const styleCollectionRouter: RouteObject = {
  path: '/styles-collection/',
  element: <StyleCollectionPage />,
};

export const newStyleCollectionRouter: RouteObject = {
  path: '/styles-collection/new',
  element: <NewStyleCollection />,
};
export const styleCollectionDetailRouter: RouteObject = {
  path: '/styles-collection/detail/:id',
  element: <StyleCollectionDetail />,
};
