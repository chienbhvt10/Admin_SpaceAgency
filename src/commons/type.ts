import { CommonPath } from './base-routes';
export const NEXT_LOCALE = 'NEXT_LOCALE';
export interface LoginInput {
  userName: String;
  passWord: String;
}
export enum INameNav {
  DASHBOARD = 'Dashboard',
  USERS = 'Users',
  CONTENT = 'Content',
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
    router: '/',
  },
  {
    id: 1,
    key: '2',
    name: INameNav.USERS,
    router: '/user',
  },
  {
    id: 2,
    key: '3',
    name: INameNav.CONTENT,
    router: '/content',
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
