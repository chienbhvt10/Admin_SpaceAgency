import { contentRouter } from 'modules/Contents/router';
import { materialCollectionRouter, newMaterialCollectionRouter, updateMaterialCollectionlRouter } from 'modules/MaterialsCollection/router';
import {
  newStyleCollectionRouter,
  styleCollectionDetailRouter,
  styleCollectionRouter,
} from 'modules/StylesCollection/router';
import { themeCollectionRouter, createThemeCreateRouter, updateThemeRouter } from 'modules/ThemesCollection/router';
import { detailUserRouter, newUserRouter, userRouter } from 'modules/UserManagement/router';
import { RouteObject } from 'react-router-dom';
import { authRouter } from './modules/Auth/router';
import { homeRouter } from './modules/Home/router';
import {
  customerSimulationDetailRouter,
  customerSimulationRouter,
  newCustomerSimulationRouter,
} from 'modules/CustomerSimulation/router';
const routes: RouteObject[] = [
  { ...authRouter },
  { ...homeRouter },
  { ...userRouter },
  { ...newUserRouter },
  { ...detailUserRouter },
  { ...contentRouter },
  { ...themeCollectionRouter },
  { ...createThemeCreateRouter },
  { ...updateThemeRouter },
  { ...styleCollectionRouter },
  { ...newStyleCollectionRouter },
  { ...styleCollectionDetailRouter },
  { ...materialCollectionRouter },
  { ...customerSimulationRouter },
  { ...customerSimulationDetailRouter },
  { ...newCustomerSimulationRouter },
];

export default routes;
