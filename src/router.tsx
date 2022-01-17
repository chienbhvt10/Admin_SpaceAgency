import { contentRouter } from 'modules/Contents/router';
import {
  customerSimulationDetailRouter,
  customerSimulationRouter,
  newCustomerSimulationRouter,
} from 'modules/CustomerSimulation/router';
import {
  materialCollectionRouter,
  newMaterialCollectionRouter,
  updateMaterialCollectionlRouter,
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
  { ...contentRouter },
  { ...themeCollectionRouter },
  { ...createThemeCreateRouter },
  { ...updateThemeRouter },
  { ...styleCollectionRouter },
  { ...newStyleCollectionRouter },
  { ...styleCollectionDetailRouter },
  { ...materialCollectionRouter },
  { ...newMaterialCollectionRouter },
  { ...updateMaterialCollectionlRouter },
  { ...customerSimulationRouter },
  { ...customerSimulationDetailRouter },
  { ...newCustomerSimulationRouter },
  { ...userManagementRouter },
  { ...detailUserManagementRouter },
  { ...createUserManagementRouter },
];

export default routes;
