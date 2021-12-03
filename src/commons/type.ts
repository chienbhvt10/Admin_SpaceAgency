import { CommonPath } from './base-routes';
export const NEXT_LOCALE = 'NEXT_LOCALE';
export interface LoginInput {
  userName: String;
  passWord: String;
}
export enum INameNav {
  DASHBOARD = 'Dashboard',
  USERS = 'Users',
}
export interface DataNav {
  id: number;
  key: string;
  name: INameNav;
  router: string;
}

export const dataNav: DataNav[] = [
  {
    id: 0,
    key: '1',
    name: INameNav.DASHBOARD,
    router: CommonPath.DEFAULT_PATH,
  },
  {
    id: 1,
    key: '2',
    name: INameNav.USERS,
    router: CommonPath.USERS_PATH,
  },
];
