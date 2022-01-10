import { contentRouter } from 'modules/Contents/router';
import { materialCollectionRouter } from 'modules/MaterialsCollection/router';
import {
  styleCollectionRouter,
  newStyleCollectionRouter,
  styleCollectionDetailRouter,
} from 'modules/StylesCollection/router';
import { themeCollectionRouter } from 'modules/ThemesCollection/router';
import { detailUserRouter, newUserRouter, userRouter } from 'modules/UserManagement/router';
import { RouteObject } from 'react-router-dom';
import { authRouter } from './modules/Auth/router';
import { homeRouter } from './modules/Home/router';

const routes: RouteObject[] = [
  { ...authRouter },
  { ...homeRouter },
  { ...userRouter },
  { ...newUserRouter },
  { ...detailUserRouter },
  { ...contentRouter },
  { ...themeCollectionRouter },
  { ...styleCollectionRouter },
  { ...newStyleCollectionRouter },
  { ...styleCollectionDetailRouter },
  { ...materialCollectionRouter },
];

export default routes;
