import { CommonPath } from './base-routes';
export const NEXT_LOCALE = 'NEXT_LOCALE';
export interface LoginInput {
  userName: String;
  passWord: String;
}
export enum INameNav {
  DASHBOARD = 'Dashboard',
  CONTENT_MANAGEMENT = 'Content Management',
  SIMULATION_MANAGEMENT = 'Simulation Management',
  ADMINISTRATOR = 'Administrator',
}
export interface ItemNav {
  key: string;
  nameSub: string;
  router: string;
}
export interface DataNav {
  id: number;
  key: string;
  name: INameNav;
  router?: string;
  item?: ItemNav[];
}

export const dataNav: DataNav[] = [
  {
    id: 0,
    key: '1',
    name: INameNav.CONTENT_MANAGEMENT,
    item: [
      {
        key: '1',
        nameSub: 'Themes Collection',
        router: '/themes-collection',
      },
      {
        key: '2',
        nameSub: 'Styles Collection',
        router: '/styles-collection',
      },
      {
        key: '3',
        nameSub: 'Material Collection',
        router: '/material-collection',
      },
    ],
  },
  {
    id: 1,
    key: '2',
    name: INameNav.SIMULATION_MANAGEMENT,
    router: '/user',
    item: [
      {
        key: '4',
        nameSub: 'User Simulate Collection',
        router: '/user-sumulate-collection',
      },
      {
        key: '5',
        nameSub: 'Contact Request',
        router: '/contact-request',
      },
    ],
  },
  {
    id: 2,
    key: '3',
    name: INameNav.ADMINISTRATOR,
    router: '/content',
    item: [
      {
        key: '6',
        nameSub: 'User Management',
        router: 'user-management',
      },
      {
        key: '7',
        nameSub: 'Roles List',
        router: 'roles-list',
      },
    ],
  },
];
enum ErrorCodes {
  GRAPHQL_PARSE_FAILED,
  GRAPHQL_VALIDATION_FAILED,
  UNAUTHENTICATED,
  FORBIDDEN,
  BAD_USER_INPUT,
  INTERNAL_SERVER_ERROR,
}

export class AppError extends Error {
  code?: ErrorCodes;
  constructor(message: string, code?: ErrorCodes) {
    super(message);
    this.code = code;
  }
}

export enum TypeForm {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}
