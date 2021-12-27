import { newUserRouter, userRouter } from 'modules/User/router';
import { RouteObject } from 'react-router-dom';
import { authRouter } from './modules/Auth/router';
import { homeRouter } from './modules/Home/router';

const routes: RouteObject[] = [{ ...authRouter }, { ...homeRouter }, { ...userRouter }, { ...newUserRouter }];

export default routes;
