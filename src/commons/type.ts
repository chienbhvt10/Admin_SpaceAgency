import { CommonPath } from 'commons/base-routes';
import { RequestStatus } from 'graphql/generated/graphql';
export const NEXT_LOCALE = 'NEXT_LOCALE';
export interface LoginInput {
  userName: String;
  passWord: String;
}
export enum INameNav {
  DASHBOARD = 'スタイル一覧',
  CONTENT_MANAGEMENT = 'コンテンツ管理',
  SIMULATION_MANAGEMENT = 'シミュレーション管理',
  ADMINISTRATOR = '管理者',
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

export interface CreateMaterialsTypeInput {
  codeStandard: string;
  codePremium: string;
  name: string;
  description?: string;
  styleId: string;
  imagePreview?: string;
  imagePreview2?: string;
  nameStandard: string;
  namePremium: string;
  nameImage1?: string;
  nameImage2?: string;
  order?: string;
  priceStandard: number;
  pricePremium: number;
  themeId: string;
}
export interface CreateThemeTypeInput {
  code: string;
  description?: string;
  name: string;
  nameEnglish: string;
  order?: string;
  price: number;
  insidePreviewUrl: string;
  outsidePreviewUrl: string;
}

export interface CreateStyleTypeInput {
  code3d: string;
  description: string;
  previewImageUrl: string;
  price: number;
  themeId: string;
  title: string;
}
export interface UpdateRequestStatusInput {
  id: string;
  status: RequestStatus;
}
export interface SimulationTypeInput {
  postCode: string;
  content: string;
  location: string;
  email: string;
  furigana: string;
  name: string;
  otherQuestion: string;
  ownerConstruction: string;
  quotationList: undefined;
  tel: string;
}

export interface TypeSelect {
  id: string;
  title: string;
}

export const dataNav: DataNav[] = [
  {
    id: 0,
    key: 'menu_1',
    name: INameNav.CONTENT_MANAGEMENT,
    item: [
      {
        key: '1',
        nameSub: 'テーマ一覧',
        router: CommonPath.THEME_COLLECTION,
      },
      {
        key: '2',
        nameSub: 'スタイル一覧',
        router: CommonPath.STYLES_COLLECTION,
      },
      {
        key: '3',
        nameSub: 'マテリアル一覧',
        router: CommonPath.MATERIAL_COLLECTION,
      },
    ],
  },
  {
    id: 1,
    key: 'menu_2',
    name: INameNav.SIMULATION_MANAGEMENT,
    router: '/user',
    item: [
      {
        key: '4',
        nameSub: 'ユーザーのシミュレーション一覧',
        router: CommonPath.USER_SIMULATE_COLLECTION,
      },
      {
        key: '5',
        nameSub: 'お問い合わせ',
        router: CommonPath.CONTACT_REQUEST,
      },
    ],
  },
  {
    id: 2,
    key: 'menu_3',
    name: INameNav.ADMINISTRATOR,
    router: '/content',
    item: [
      {
        key: '6',
        nameSub: 'ユーザー管理',
        router: CommonPath.USERS_MANAGEMENT,
      },
      {
        key: '7',
        nameSub: 'ロール一覧',
        router: CommonPath.ROLES_LIST,
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
export enum TypePagination {
  DEFAULT_SKIP = 0,
  DEFAULT_LIMIT = 20,
}
export enum TypeActiveAccount {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
export enum TypeRole {
  ADMIN = 'ADMIN',
  SYSADMIN = 'SYSADMIN',
  CUSTOMER = 'CUSTOMER',
}

export enum TypeKeyFilterUser {
  EMAIL = 'email',
  STATUS = 'status',
  ROLE = 'role',
}
export enum TypeKeyFilterMaterials {
  NAME = 'title',
  THEME = 'theme',
  STYLE = 'style',
}
export enum TypeKeyFilterUserSimulation {
  NAME = 'firstName',
  THEME = 'theme',
  STYLE = 'style',
  START_DATE = '',
  END_DATE = '',
}
export enum TypeKeyFilterTheme {
  NAME = 'title',
  THEME = 'id',
}
export enum TypeKeyFilterRequest {
  EMAIL = 'email',
}
export enum TypeKeyFilterStyle {
  NAME = 'title',
  THEME = 'theme',
}
export enum TypeSortUser {
  EMAIL = 'email',
}
export interface ObjImage {
  imagePath: string;
}
