import { CommonPath } from 'commons/base-routes';
import { RouteObject } from 'react-router';
import CustomerSimulationDetail from './pages/detail';
import CustomerSimulationPage from './pages/list';
import NewCustomerSimulation from './pages/new';

export const customerSimulationRouter: RouteObject = {
  path: CommonPath.USER_SIMULATE_COLLECTION,
  element: <CustomerSimulationPage></CustomerSimulationPage>,
};
export const newCustomerSimulationRouter: RouteObject = {
  path: CommonPath.USER_SIMULATE_COLLECTION_NEW,
  element: <NewCustomerSimulation></NewCustomerSimulation>,
};
export const customerSimulationDetailRouter: RouteObject = {
  path: CommonPath.USER_SIMULATE_COLLECTION_DETAIL,
  element: <CustomerSimulationDetail></CustomerSimulationDetail>,
};
