import { RouteObject } from 'react-router';
import CustomerSimulationDetail from './pages/detail';
import CustomerSimulationPage from './pages/list';
import NewCustomerSimulation from './pages/new';

export const customerSimulationRouter: RouteObject = {
  path: '/user-simulate-collection/',
  element: <CustomerSimulationPage />,
};
export const newCustomerSimulationRouter: RouteObject = {
  path: '/user-simulate-collection/new',
  element: <NewCustomerSimulation />,
};
export const customerSimulationDetailRouter: RouteObject = {
  path: '/user-simulate-collection/detail/:id',
  element: <CustomerSimulationDetail />,
};
