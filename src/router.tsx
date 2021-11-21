import { RouteObject } from 'react-router-dom';
import { authRouter } from './modules/Auth/router';
import { homeRouter } from './modules/Home/router';

const routes: RouteObject[] = [{ ...authRouter }, { ...homeRouter }];

export default routes;
