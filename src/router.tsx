import { contactRequestRouter, contactRequestDetailRouter } from 'modules/ContactRequest/router';
import {
  customerSimulationDetailRouter,
  customerSimulationRouter,
  newCustomerSimulationRouter,
} from 'modules/CustomerSimulation/router';
import {
  materialCollectionRouter,
  newMaterialCollectionRouter,
  updateMaterialCollectionRouter,
} from 'modules/MaterialsCollection/router';
import {
  newStyleCollectionRouter,
  styleCollectionDetailRouter,
  styleCollectionRouter,
} from 'modules/StylesCollection/router';
import { createThemeCreateRouter, themeCollectionRouter, updateThemeRouter } from 'modules/ThemesCollection/router';
import {
  createUserManagementRouter,
  detailUserManagementRouter,
  userManagementRouter,
} from 'modules/UserManagement/router';
import { RouteObject } from 'react-router-dom';
import { authRouter } from './modules/Auth/router';
import { homeRouter } from './modules/Home/router';
const routes: RouteObject[] = [
  { ...authRouter },
  { ...homeRouter },
  { ...themeCollectionRouter },
  { ...createThemeCreateRouter },
  { ...updateThemeRouter },
  { ...styleCollectionRouter },
  { ...newStyleCollectionRouter },
  { ...styleCollectionDetailRouter },
  { ...materialCollectionRouter },
  { ...newMaterialCollectionRouter },
  { ...updateMaterialCollectionRouter },
  { ...customerSimulationRouter },
  { ...customerSimulationDetailRouter },
  { ...newCustomerSimulationRouter },
  { ...userManagementRouter },
  { ...detailUserManagementRouter },
  { ...createUserManagementRouter },
  { ...contactRequestRouter },
  { ...contactRequestDetailRouter },
];

export default routes;
