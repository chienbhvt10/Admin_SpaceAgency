import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Auth = {
  __typename?: 'Auth';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type BusinessCustomer = {
  __typename?: 'BusinessCustomer';
  companyName: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  furiquana: Scalars['String'];
  id: Scalars['String'];
  questionContent: Scalars['String'];
  questionTitle: Scalars['String'];
  representative: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChangePasswordInput = {
  newPass: Scalars['String'];
  oldPass: Scalars['String'];
};

export type CreateAuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateBusinessCustomerInput = {
  companyName: Scalars['String'];
  email: Scalars['String'];
  furiquana: Scalars['String'];
  questionContent: Scalars['String'];
  questionTitle: Scalars['String'];
  representative: Scalars['String'];
};

export type CreateMaterialInput = {
  /** list new material type */
  materialTypes?: InputMaybe<Array<CreateMaterialTypeInput>>;
  /** style id of material */
  style?: InputMaybe<RefInput>;
  /** tile of material */
  title: Scalars['String'];
};

export type CreateMaterialTypeInput = {
  /** 3d code of material type */
  code3d?: InputMaybe<Scalars['String']>;
  /** material id of material type */
  material?: InputMaybe<RefInput>;
  price?: InputMaybe<CreatePriceInput>;
  /** title of material type */
  title: Scalars['String'];
};

export type CreatePriceInput = {
  unit?: InputMaybe<CurrencyUnit>;
  value?: InputMaybe<Scalars['Float']>;
};

export type CreateRequestInput = {
  address: Scalars['String'];
  content: Scalars['String'];
  email: Scalars['String'];
  furigana: Scalars['String'];
  hasLand: Scalars['Boolean'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  requesterFullName: Scalars['String'];
  simulation: RefInput;
  type?: InputMaybe<RequestType>;
  user?: InputMaybe<RefInput>;
};

export type CreateSimulationComponentInput = {
  materialTypes: Array<RefInput>;
  style: RefInput;
  theme: RefInput;
};

export type CreateStyleInput = {
  /** 3d code of style */
  code3d?: InputMaybe<Scalars['String']>;
  /** description of style */
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<CreatePriceInput>;
  theme?: InputMaybe<RefInput>;
  /** title of style */
  title: Scalars['String'];
};

export type CreateThemeCategoryInput = {
  title: Scalars['String'];
};

export type CreateThemeImageInput = {
  insidePreviewUrl?: InputMaybe<Scalars['String']>;
  outsidePreviewUrl?: InputMaybe<Scalars['String']>;
};

export type CreateThemeInput = {
  code3D?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<CreatePriceInput>;
  themeCategories?: InputMaybe<Array<RefInput>>;
  themeImage?: InputMaybe<RefInput>;
  title: Scalars['String'];
};

export type CreateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  /** First name in furigana */
  firstNameF: Scalars['String'];
  lastName: Scalars['String'];
  /** Last name in furigana */
  lastNameF: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export enum CurrencyUnit {
  /** European Union */
  Ecu = 'ECU',
  /** Japan */
  Jpy = 'JPY',
  /** American */
  Usd = 'USD',
  /** Vietnam */
  Vnd = 'VND'
}

export type FilterInput = {
  /** set it to true if this field is a reference to another type */
  isRef?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Material = {
  __typename?: 'Material';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  materialTypes?: Maybe<Array<MaterialType>>;
  style?: Maybe<Style>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type MaterialMaterialTypesArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};

export type MaterialType = {
  __typename?: 'MaterialType';
  code3d?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  material?: Maybe<Material>;
  price?: Maybe<Price>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change current user password */
  changePassword: Scalars['Boolean'];
  /** Create new Admin */
  createAdmin: User;
  createBusinessCustomer: BusinessCustomer;
  /** Create new Customer */
  createCustomer: User;
  /** Create new Material */
  createMaterial: Material;
  /** Create new Material Type */
  createMaterialType: MaterialType;
  createRequest: Request;
  createSimulationComponent: SimulationComponent;
  /** Create new style */
  createStyle: Style;
  createTheme: Theme;
  createThemeCategory: ThemeCategory;
  createThemeImage: ThemeImage;
  loginAdmin: Auth;
  loginCustomer: Auth;
  previewQuotation?: Maybe<Quotation>;
  /** find one material and remove */
  removeMaterial: Material;
  /** find one and remove material type */
  removeMaterialType: MaterialType;
  removeRequest: Request;
  removeSimulation?: Maybe<Simulation>;
  removeSimulationComponent: SimulationComponent;
  removeStyle: Style;
  removeTheme: Theme;
  removeThemeCategory: ThemeCategory;
  removeThemeImage: ThemeImage;
  /** Remove user by id */
  removeUser: User;
  submitDraftSimulation: Simulation;
  submitSimulation: Simulation;
  /** find one material and update */
  updateMaterial: Material;
  /** find one material type and update */
  updateMaterialType: MaterialType;
  updateRequestStatus: Request;
  updateSimulationComponent: SimulationComponent;
  updateStyle: Style;
  updateTheme: Theme;
  updateThemeCategory: ThemeCategory;
  updateThemeImage: ThemeImage;
  /** Update user by id */
  updateUser: User;
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationCreateAdminArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateBusinessCustomerArgs = {
  createBusinessCustomer: CreateBusinessCustomerInput;
};


export type MutationCreateCustomerArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateMaterialArgs = {
  createMaterialInput: CreateMaterialInput;
};


export type MutationCreateMaterialTypeArgs = {
  createMaterialTypeInput: CreateMaterialTypeInput;
};


export type MutationCreateRequestArgs = {
  createRequestInput: CreateRequestInput;
};


export type MutationCreateSimulationComponentArgs = {
  createSimulationComponentInput: CreateSimulationComponentInput;
};


export type MutationCreateStyleArgs = {
  createStyleInput: CreateStyleInput;
};


export type MutationCreateThemeArgs = {
  createThemeInput: CreateThemeInput;
};


export type MutationCreateThemeCategoryArgs = {
  createThemeCategoryInput: CreateThemeCategoryInput;
};


export type MutationCreateThemeImageArgs = {
  createThemeImageInput: CreateThemeImageInput;
};


export type MutationLoginAdminArgs = {
  loginInput: CreateAuthInput;
};


export type MutationLoginCustomerArgs = {
  loginInput: CreateAuthInput;
};


export type MutationPreviewQuotationArgs = {
  previewQuotationInput: PreviewQuotationInput;
};


export type MutationRemoveMaterialArgs = {
  id: Scalars['String'];
};


export type MutationRemoveMaterialTypeArgs = {
  id: Scalars['String'];
};


export type MutationRemoveRequestArgs = {
  id: Scalars['String'];
};


export type MutationRemoveSimulationArgs = {
  id: Scalars['String'];
};


export type MutationRemoveSimulationComponentArgs = {
  id: Scalars['String'];
};


export type MutationRemoveStyleArgs = {
  id: Scalars['String'];
};


export type MutationRemoveThemeArgs = {
  id: Scalars['String'];
};


export type MutationRemoveThemeCategoryArgs = {
  id: Scalars['String'];
};


export type MutationRemoveThemeImageArgs = {
  id: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationSubmitDraftSimulationArgs = {
  submitDraftSimulationInput: SubmitDraftSimulationInput;
};


export type MutationSubmitSimulationArgs = {
  submitSimulationInput: SubmitSimulationInput;
};


export type MutationUpdateMaterialArgs = {
  updateMaterialInput: UpdateMaterialInput;
};


export type MutationUpdateMaterialTypeArgs = {
  updateMaterialType: UpdateMaterialTypeInput;
};


export type MutationUpdateRequestStatusArgs = {
  id: Scalars['String'];
  status: RequestStatus;
};


export type MutationUpdateSimulationComponentArgs = {
  updateSimulationComponentInput: UpdateSimulationComponentInput;
};


export type MutationUpdateStyleArgs = {
  updateStyleInput: UpdateStyleInput;
};


export type MutationUpdateThemeArgs = {
  updateThemeInput: UpdateThemeInput;
};


export type MutationUpdateThemeCategoryArgs = {
  updateThemeCategoryInput: UpdateThemeCategoryInput;
};


export type MutationUpdateThemeImageArgs = {
  updateThemeImageInput: UpdateThemeImageInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PreviewQuotationInput = {
  componentId?: InputMaybe<RefInput>;
  createSimulationComponentInput?: InputMaybe<CreateSimulationComponentInput>;
};

export type Price = {
  __typename?: 'Price';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  refId: Scalars['String'];
  refType: RefType;
  unit: CurrencyUnit;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  count: Scalars['Int'];
  /** find one material */
  material: Material;
  /** find one material type */
  materialType: MaterialType;
  /** find all material types */
  materialTypes: Array<MaterialType>;
  /** find all materials */
  materials?: Maybe<Array<Material>>;
  /** Get current user profile */
  me: User;
  request?: Maybe<Request>;
  requests: Array<Request>;
  simulation: Simulation;
  simulationComponent?: Maybe<SimulationComponent>;
  simulationComponents: Array<SimulationComponent>;
  /** get all simulation */
  simulations: Array<Simulation>;
  /** find one style */
  style: Style;
  /** find all styles */
  styles?: Maybe<Array<Style>>;
  theme: Theme;
  themeCategories: Array<ThemeCategory>;
  themeCategory: ThemeCategory;
  themes?: Maybe<Array<Theme>>;
  /** Get user by id  */
  user: User;
  /** Get all user */
  users: Array<User>;
};


export type QueryCountArgs = {
  type: SchemaType;
  where?: InputMaybe<WhereInput>;
};


export type QueryMaterialArgs = {
  id: Scalars['String'];
};


export type QueryMaterialTypeArgs = {
  id: Scalars['String'];
};


export type QueryMaterialTypesArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QueryMaterialsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QueryRequestArgs = {
  id: Scalars['String'];
};


export type QueryRequestsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QuerySimulationArgs = {
  id: Scalars['String'];
};


export type QuerySimulationComponentArgs = {
  id: Scalars['String'];
};


export type QuerySimulationComponentsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QuerySimulationsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QueryStyleArgs = {
  id: Scalars['String'];
};


export type QueryStylesArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QueryThemeArgs = {
  id: Scalars['String'];
};


export type QueryThemeCategoriesArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QueryThemeCategoryArgs = {
  id: Scalars['String'];
};


export type QueryThemesArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};

export type Quotation = {
  __typename?: 'Quotation';
  amountGross: Scalars['Float'];
  amountNet: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  quotationItems: Array<QuotationItem>;
  taxRate: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type QuotationItem = {
  __typename?: 'QuotationItem';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  priceUnit: CurrencyUnit;
  priceValue: Scalars['Float'];
  refId: Scalars['String'];
  refType: RefType;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RefInput = {
  id: Scalars['String'];
};

/** reference to scpecific schema type */
export enum RefType {
  MaterialType = 'MATERIAL_TYPE',
  Style = 'STYLE',
  Theme = 'THEME'
}

export type Request = {
  __typename?: 'Request';
  address: Scalars['String'];
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  furigana: Scalars['String'];
  hasLand: Scalars['Boolean'];
  id: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  requesterFullName: Scalars['String'];
  simulation: Simulation;
  status: RequestStatus;
  type: RequestType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export enum RequestStatus {
  Accepted = 'ACCEPTED',
  Open = 'OPEN',
  Rejected = 'REJECTED'
}

export enum RequestType {
  Meeting = 'MEETING',
  Other = 'OTHER',
  SendDocument = 'SEND_DOCUMENT'
}

export enum Role {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Sysadmin = 'SYSADMIN'
}

export enum SchemaType {
  Material = 'Material',
  MaterialType = 'MaterialType',
  Price = 'Price',
  Request = 'Request',
  Simulation = 'Simulation',
  SimulationComponent = 'SimulationComponent',
  Style = 'Style',
  Theme = 'Theme',
  ThemeCategor = 'ThemeCategor',
  User = 'User'
}

export type Simulation = {
  __typename?: 'Simulation';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  quotation?: Maybe<Quotation>;
  requests?: Maybe<Array<Request>>;
  simulationComponent?: Maybe<SimulationComponent>;
  status: SimulationStatus;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type SimulationComponent = {
  __typename?: 'SimulationComponent';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  materialTypes?: Maybe<Array<MaterialType>>;
  style?: Maybe<Style>;
  theme?: Maybe<Theme>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum SimulationStatus {
  Completed = 'COMPLETED',
  Deleted = 'DELETED',
  Draft = 'DRAFT'
}

export type SortInput = {
  key: Scalars['String'];
  value?: InputMaybe<SortValue>;
};

export enum SortValue {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Style = {
  __typename?: 'Style';
  code3d?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  materials: Array<Material>;
  price?: Maybe<Price>;
  theme?: Maybe<Theme>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type StyleMaterialsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};

export type SubmitDraftSimulationInput = {
  simulationComponent: CreateSimulationComponentInput;
};

export type SubmitSimulationInput = {
  createSimulationComponentInput?: InputMaybe<CreateSimulationComponentInput>;
  simulation?: InputMaybe<RefInput>;
  simulationComponent?: InputMaybe<RefInput>;
};

export type Theme = {
  __typename?: 'Theme';
  code3D?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  price?: Maybe<Price>;
  styles?: Maybe<Array<Style>>;
  themeCategories?: Maybe<Array<ThemeCategory>>;
  themeImage?: Maybe<ThemeImage>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ThemeCategory = {
  __typename?: 'ThemeCategory';
  id: Scalars['String'];
  themes?: Maybe<Array<Theme>>;
  title: Scalars['String'];
};

export type ThemeImage = {
  __typename?: 'ThemeImage';
  id: Scalars['String'];
  insidePreviewUrl?: Maybe<Scalars['String']>;
  outsidePreviewUrl?: Maybe<Scalars['String']>;
};

export type UpdateMaterialInput = {
  id: Scalars['String'];
  /** list material type */
  materialTypes?: InputMaybe<Array<UpdateMaterialTypeInput>>;
  /** style id of material */
  style?: InputMaybe<RefInput>;
  /** tile of material */
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateMaterialTypeInput = {
  /** 3d code of material type */
  code3d?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** material id of material type */
  material?: InputMaybe<RefInput>;
  price?: InputMaybe<CreatePriceInput>;
  /** title of material type */
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateSimulationComponentInput = {
  id: Scalars['String'];
  materialTypes?: InputMaybe<Array<RefInput>>;
  style?: InputMaybe<RefInput>;
  theme?: InputMaybe<RefInput>;
};

export type UpdateStyleInput = {
  /** 3d code of style */
  code3d?: InputMaybe<Scalars['String']>;
  /** description of style */
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  price?: InputMaybe<CreatePriceInput>;
  theme?: InputMaybe<RefInput>;
  /** title of style */
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateThemeCategoryInput = {
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateThemeImageInput = {
  id: Scalars['String'];
  insidePreviewUrl?: InputMaybe<Scalars['String']>;
  outsidePreviewUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateThemeInput = {
  code3D?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  price?: InputMaybe<CreatePriceInput>;
  themeCategories?: InputMaybe<Array<RefInput>>;
  themeImage?: InputMaybe<RefInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  /** First name in furigana */
  firstNameF?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  /** Last name in furigana */
  lastNameF?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  /** First name in furigana */
  firstNameF?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  /** Last name in furigana */
  lastNameF?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WhereInput = {
  filter?: InputMaybe<Array<FilterInput>>;
  sort?: InputMaybe<Array<SortInput>>;
};

export type AuthFields = { __typename?: 'Auth', refreshToken?: string | null | undefined, accessToken?: string | null | undefined };

export type IMaterial = { __typename?: 'Material', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, title?: string | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined };

export type IMaterialType = { __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined };

export type IPrice = { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType };

export type IQuotation = { __typename?: 'Quotation', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, taxRate: number };

export type IRequest = { __typename?: 'Request', createdAt?: any | null | undefined, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content: string, postcode: string, type: RequestType, user?: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } | null | undefined };

export type ISimulation = { __typename?: 'Simulation', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, status: SimulationStatus, requests?: Array<{ __typename?: 'Request', createdAt?: any | null | undefined, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content: string, postcode: string, type: RequestType, user?: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } | null | undefined }> | null | undefined, simulationComponent?: { __typename?: 'SimulationComponent', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined } | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined } | null | undefined, user?: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } | null | undefined, quotation?: { __typename?: 'Quotation', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, taxRate: number } | null | undefined };

export type ISimulationComponent = { __typename?: 'SimulationComponent', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined } | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined };

export type IStyle = { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined };

export type ITheme = { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined };

export type IThemeImage = { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined };

export type IThemeCategory = { __typename?: 'ThemeCategory', id: string, title: string };

export type IUsersFields = { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined };

export type LoginAdminVariables = Exact<{
  loginInput: CreateAuthInput;
}>;


export type LoginAdmin = { __typename?: 'Mutation', loginAdmin: { __typename?: 'Auth', refreshToken?: string | null | undefined, accessToken?: string | null | undefined } };

export type MeVariables = Exact<{ [key: string]: never; }>;


export type Me = { __typename?: 'Query', me: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } };

export type GetListRequestVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
}>;


export type GetListRequest = { __typename?: 'Query', requests: Array<{ __typename?: 'Request', createdAt?: any | null | undefined, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content: string, postcode: string, type: RequestType, user?: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } | null | undefined }> };

export type RemoveSimulationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveSimulation = { __typename?: 'Mutation', removeSimulation?: { __typename?: 'Simulation', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, status: SimulationStatus, requests?: Array<{ __typename?: 'Request', createdAt?: any | null | undefined, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content: string, postcode: string, type: RequestType, user?: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } | null | undefined }> | null | undefined, simulationComponent?: { __typename?: 'SimulationComponent', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined } | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined } | null | undefined, user?: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } | null | undefined, quotation?: { __typename?: 'Quotation', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, taxRate: number } | null | undefined } | null | undefined };

export type DetailSimulationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DetailSimulation = { __typename?: 'Query', simulation: { __typename?: 'Simulation', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, status: SimulationStatus, requests?: Array<{ __typename?: 'Request', createdAt?: any | null | undefined, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content: string, postcode: string, type: RequestType, user?: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } | null | undefined }> | null | undefined, simulationComponent?: { __typename?: 'SimulationComponent', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined } | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined } | null | undefined, user?: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } | null | undefined, quotation?: { __typename?: 'Quotation', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, taxRate: number } | null | undefined } };

export type GetListSimulationComponentsVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListSimulationComponents = { __typename?: 'Query', simulationComponents: Array<{ __typename?: 'SimulationComponent', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined } | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined }> };

export type GetListSimulationsVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListSimulations = { __typename?: 'Query', simulations: Array<{ __typename?: 'Simulation', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, status: SimulationStatus, requests?: Array<{ __typename?: 'Request', createdAt?: any | null | undefined, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content: string, postcode: string, type: RequestType, user?: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } | null | undefined }> | null | undefined, simulationComponent?: { __typename?: 'SimulationComponent', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined } | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined } | null | undefined, user?: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } | null | undefined, quotation?: { __typename?: 'Quotation', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, taxRate: number } | null | undefined }> };

export type CreateMaterialVariables = Exact<{
  createMaterialInput: CreateMaterialInput;
}>;


export type CreateMaterial = { __typename?: 'Mutation', createMaterial: { __typename?: 'Material', id: string, title?: string | null | undefined } };

export type RemoveMaterialVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveMaterial = { __typename?: 'Mutation', removeMaterial: { __typename?: 'Material', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, title?: string | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined } };

export type UpdateMaterialVariables = Exact<{
  updateMaterialInput: UpdateMaterialInput;
}>;


export type UpdateMaterial = { __typename?: 'Mutation', updateMaterial: { __typename?: 'Material', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, title?: string | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined } };

export type GetDetailMaterialVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDetailMaterial = { __typename?: 'Query', material: { __typename?: 'Material', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, title?: string | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined } };

export type GetListMaterialsVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListMaterials = { __typename?: 'Query', materials?: Array<{ __typename?: 'Material', createdAt?: any | null | undefined, updatedAt?: any | null | undefined, id: string, title?: string | null | undefined, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null | undefined, id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined }> | null | undefined, style?: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } | null | undefined }> | null | undefined };

export type GetTotalCountVariables = Exact<{
  type: SchemaType;
  where?: InputMaybe<WhereInput>;
}>;


export type GetTotalCount = { __typename?: 'Query', count: number };

export type CreateStyleVariables = Exact<{
  createStyleInput: CreateStyleInput;
}>;


export type CreateStyle = { __typename?: 'Mutation', createStyle: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } };

export type RemoveStyleVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveStyle = { __typename?: 'Mutation', removeStyle: { __typename?: 'Style', id: string } };

export type UpdateStyleVariables = Exact<{
  updateStyleInput: UpdateStyleInput;
}>;


export type UpdateStyle = { __typename?: 'Mutation', updateStyle: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } };

export type GetStyleVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetStyle = { __typename?: 'Query', style: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined } };

export type GetListStylesVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListStyles = { __typename?: 'Query', styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined };

export type CreateThemeCategoryVariables = Exact<{
  createThemeCategoryInput: CreateThemeCategoryInput;
}>;


export type CreateThemeCategory = { __typename?: 'Mutation', createThemeCategory: { __typename?: 'ThemeCategory', id: string, title: string } };

export type CreateThemeVariables = Exact<{
  createThemeInput: CreateThemeInput;
}>;


export type CreateTheme = { __typename?: 'Mutation', createTheme: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined } };

export type CreateThemeImageVariables = Exact<{
  createThemeImageInput: CreateThemeImageInput;
}>;


export type CreateThemeImage = { __typename?: 'Mutation', createThemeImage: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } };

export type RemoveThemeVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveTheme = { __typename?: 'Mutation', removeTheme: { __typename?: 'Theme', id: string, title: string } };

export type UpdateThemeCategoryVariables = Exact<{
  updateThemeCategoryInput: UpdateThemeCategoryInput;
}>;


export type UpdateThemeCategory = { __typename?: 'Mutation', updateThemeCategory: { __typename?: 'ThemeCategory', id: string, title: string } };

export type UpdateThemeVariables = Exact<{
  updateThemeInput: UpdateThemeInput;
}>;


export type UpdateTheme = { __typename?: 'Mutation', updateTheme: { __typename?: 'Theme', id: string, title: string } };

export type UpdateThemeImageVariables = Exact<{
  updateThemeImageInput: UpdateThemeImageInput;
}>;


export type UpdateThemeImage = { __typename?: 'Mutation', updateThemeImage: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } };

export type GetDetailThemeVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDetailTheme = { __typename?: 'Query', theme: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined } };

export type GetListThemesVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
}>;


export type GetListThemes = { __typename?: 'Query', themes?: Array<{ __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, refId: string, refType: RefType } | null | undefined, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined }> | null | undefined }> | null | undefined };

export type CreateCustomerVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateCustomer = { __typename?: 'Mutation', createCustomer: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } };

export type RemoveUserVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveUser = { __typename?: 'Mutation', removeUser: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } };

export type UpdateUserVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUser = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } };

export type GetUserVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUser = { __typename?: 'Query', user: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } };

export type GetListUsersVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListUsers = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined }> };

export const AuthFields = gql`
    fragment AuthFields on Auth {
  refreshToken
  accessToken
}
    `;
export const IPrice = gql`
    fragment IPrice on Price {
  id
  value
  unit
  createdAt
  updatedAt
  refId
  refType
}
    `;
export const IMaterialType = gql`
    fragment IMaterialType on MaterialType {
  createdAt
  createdAt
  id
  title
  code3d
  price {
    ...IPrice
  }
}
    ${IPrice}`;
export const IStyle = gql`
    fragment IStyle on Style {
  id
  title
  code3d
  description
  price {
    ...IPrice
  }
  theme {
    id
    title
    description
    code3D
    createdAt
    updatedAt
  }
}
    ${IPrice}`;
export const IMaterial = gql`
    fragment IMaterial on Material {
  createdAt
  updatedAt
  id
  title
  materialTypes {
    ...IMaterialType
  }
  style {
    ...IStyle
  }
}
    ${IMaterialType}
${IStyle}`;
export const IUsersFields = gql`
    fragment IUsersFields on User {
  id
  email
  firstName
  lastName
  firstNameF
  lastNameF
  address
  phone
  role
}
    `;
export const IRequest = gql`
    fragment IRequest on Request {
  createdAt
  createdAt
  id
  requesterFullName
  furigana
  address
  phone
  email
  hasLand
  content
  postcode
  type
  user {
    ...IUsersFields
  }
}
    ${IUsersFields}`;
export const IThemeImage = gql`
    fragment IThemeImage on ThemeImage {
  id
  outsidePreviewUrl
  insidePreviewUrl
}
    `;
export const IThemeCategory = gql`
    fragment IThemeCategory on ThemeCategory {
  id
  title
}
    `;
export const ITheme = gql`
    fragment ITheme on Theme {
  id
  title
  description
  code3D
  createdAt
  updatedAt
  price {
    ...IPrice
  }
  themeImage {
    ...IThemeImage
  }
  themeCategories {
    ...IThemeCategory
  }
  styles {
    ...IStyle
  }
}
    ${IPrice}
${IThemeImage}
${IThemeCategory}
${IStyle}`;
export const ISimulationComponent = gql`
    fragment ISimulationComponent on SimulationComponent {
  createdAt
  updatedAt
  id
  theme {
    ...ITheme
  }
  style {
    ...IStyle
  }
  materialTypes {
    ...IMaterialType
  }
}
    ${ITheme}
${IStyle}
${IMaterialType}`;
export const IQuotation = gql`
    fragment IQuotation on Quotation {
  createdAt
  updatedAt
  id
  taxRate
}
    `;
export const ISimulation = gql`
    fragment ISimulation on Simulation {
  createdAt
  updatedAt
  id
  status
  requests {
    ...IRequest
  }
  simulationComponent {
    ...ISimulationComponent
  }
  user {
    ...IUsersFields
  }
  quotation {
    ...IQuotation
  }
}
    ${IRequest}
${ISimulationComponent}
${IUsersFields}
${IQuotation}`;
export const LoginAdminDocument = gql`
    mutation loginAdmin($loginInput: CreateAuthInput!) {
  loginAdmin(loginInput: $loginInput) {
    refreshToken
    accessToken
  }
}
    `;
export const MeDocument = gql`
    query me {
  me {
    ...IUsersFields
  }
}
    ${IUsersFields}`;
export const GetListRequestDocument = gql`
    query getListRequest($pagination: PaginationInput, $where: WhereInput) {
  requests(pagination: $pagination, where: $where) {
    ...IRequest
  }
}
    ${IRequest}`;
export const RemoveSimulationDocument = gql`
    mutation removeSimulation($id: String!) {
  removeSimulation(id: $id) {
    ...ISimulation
  }
}
    ${ISimulation}`;
export const DetailSimulationDocument = gql`
    query detailSimulation($id: String!) {
  simulation(id: $id) {
    ...ISimulation
  }
}
    ${ISimulation}`;
export const GetListSimulationComponentsDocument = gql`
    query getListSimulationComponents($where: WhereInput, $pagination: PaginationInput) {
  simulationComponents(where: $where, pagination: $pagination) {
    ...ISimulationComponent
  }
}
    ${ISimulationComponent}`;
export const GetListSimulationsDocument = gql`
    query getListSimulations($where: WhereInput, $pagination: PaginationInput) {
  simulations(where: $where, pagination: $pagination) {
    ...ISimulation
  }
}
    ${ISimulation}`;
export const CreateMaterialDocument = gql`
    mutation createMaterial($createMaterialInput: CreateMaterialInput!) {
  createMaterial(createMaterialInput: $createMaterialInput) {
    id
    title
  }
}
    `;
export const RemoveMaterialDocument = gql`
    mutation removeMaterial($id: String!) {
  removeMaterial(id: $id) {
    ...IMaterial
  }
}
    ${IMaterial}`;
export const UpdateMaterialDocument = gql`
    mutation updateMaterial($updateMaterialInput: UpdateMaterialInput!) {
  updateMaterial(updateMaterialInput: $updateMaterialInput) {
    ...IMaterial
  }
}
    ${IMaterial}`;
export const GetDetailMaterialDocument = gql`
    query getDetailMaterial($id: String!) {
  material(id: $id) {
    ...IMaterial
  }
}
    ${IMaterial}`;
export const GetListMaterialsDocument = gql`
    query getListMaterials($where: WhereInput, $pagination: PaginationInput) {
  materials(where: $where, pagination: $pagination) {
    ...IMaterial
  }
}
    ${IMaterial}`;
export const GetTotalCountDocument = gql`
    query getTotalCount($type: SchemaType!, $where: WhereInput) {
  count(type: $type, where: $where)
}
    `;
export const CreateStyleDocument = gql`
    mutation createStyle($createStyleInput: CreateStyleInput!) {
  createStyle(createStyleInput: $createStyleInput) {
    ...IStyle
  }
}
    ${IStyle}`;
export const RemoveStyleDocument = gql`
    mutation removeStyle($id: String!) {
  removeStyle(id: $id) {
    id
  }
}
    `;
export const UpdateStyleDocument = gql`
    mutation updateStyle($updateStyleInput: UpdateStyleInput!) {
  updateStyle(updateStyleInput: $updateStyleInput) {
    ...IStyle
  }
}
    ${IStyle}`;
export const GetStyleDocument = gql`
    query getStyle($id: String!) {
  style(id: $id) {
    ...IStyle
  }
}
    ${IStyle}`;
export const GetListStylesDocument = gql`
    query getListStyles($where: WhereInput, $pagination: PaginationInput) {
  styles(where: $where, pagination: $pagination) {
    ...IStyle
  }
}
    ${IStyle}`;
export const CreateThemeCategoryDocument = gql`
    mutation createThemeCategory($createThemeCategoryInput: CreateThemeCategoryInput!) {
  createThemeCategory(createThemeCategoryInput: $createThemeCategoryInput) {
    id
    title
  }
}
    `;
export const CreateThemeDocument = gql`
    mutation createTheme($createThemeInput: CreateThemeInput!) {
  createTheme(createThemeInput: $createThemeInput) {
    ...ITheme
  }
}
    ${ITheme}`;
export const CreateThemeImageDocument = gql`
    mutation createThemeImage($createThemeImageInput: CreateThemeImageInput!) {
  createThemeImage(createThemeImageInput: $createThemeImageInput) {
    id
    outsidePreviewUrl
    insidePreviewUrl
  }
}
    `;
export const RemoveThemeDocument = gql`
    mutation removeTheme($id: String!) {
  removeTheme(id: $id) {
    id
    title
  }
}
    `;
export const UpdateThemeCategoryDocument = gql`
    mutation updateThemeCategory($updateThemeCategoryInput: UpdateThemeCategoryInput!) {
  updateThemeCategory(updateThemeCategoryInput: $updateThemeCategoryInput) {
    id
    title
  }
}
    `;
export const UpdateThemeDocument = gql`
    mutation updateTheme($updateThemeInput: UpdateThemeInput!) {
  updateTheme(updateThemeInput: $updateThemeInput) {
    id
    title
  }
}
    `;
export const UpdateThemeImageDocument = gql`
    mutation updateThemeImage($updateThemeImageInput: UpdateThemeImageInput!) {
  updateThemeImage(updateThemeImageInput: $updateThemeImageInput) {
    id
    outsidePreviewUrl
    insidePreviewUrl
  }
}
    `;
export const GetDetailThemeDocument = gql`
    query getDetailTheme($id: String!) {
  theme(id: $id) {
    ...ITheme
  }
}
    ${ITheme}`;
export const GetListThemesDocument = gql`
    query getListThemes($pagination: PaginationInput, $where: WhereInput) {
  themes(pagination: $pagination, where: $where) {
    ...ITheme
  }
}
    ${ITheme}`;
export const CreateCustomerDocument = gql`
    mutation createCustomer($createUserInput: CreateUserInput!) {
  createCustomer(createUserInput: $createUserInput) {
    ...IUsersFields
  }
}
    ${IUsersFields}`;
export const RemoveUserDocument = gql`
    mutation removeUser($id: String!) {
  removeUser(id: $id) {
    ...IUsersFields
  }
}
    ${IUsersFields}`;
export const UpdateUserDocument = gql`
    mutation updateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    ...IUsersFields
  }
}
    ${IUsersFields}`;
export const GetUserDocument = gql`
    query getUser($id: String!) {
  user(id: $id) {
    ...IUsersFields
  }
}
    ${IUsersFields}`;
export const GetListUsersDocument = gql`
    query getListUsers($where: WhereInput, $pagination: PaginationInput) {
  users(where: $where, pagination: $pagination) {
    ...IUsersFields
  }
}
    ${IUsersFields}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    loginAdmin(variables: LoginAdminVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginAdmin> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginAdmin>(LoginAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'loginAdmin');
    },
    me(variables?: MeVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Me> {
      return withWrapper((wrappedRequestHeaders) => client.request<Me>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'me');
    },
    getListRequest(variables?: GetListRequestVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListRequest> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListRequest>(GetListRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListRequest');
    },
    removeSimulation(variables: RemoveSimulationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveSimulation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveSimulation>(RemoveSimulationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeSimulation');
    },
    detailSimulation(variables: DetailSimulationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DetailSimulation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DetailSimulation>(DetailSimulationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'detailSimulation');
    },
    getListSimulationComponents(variables?: GetListSimulationComponentsVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListSimulationComponents> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListSimulationComponents>(GetListSimulationComponentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListSimulationComponents');
    },
    getListSimulations(variables?: GetListSimulationsVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListSimulations> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListSimulations>(GetListSimulationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListSimulations');
    },
    createMaterial(variables: CreateMaterialVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateMaterial> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateMaterial>(CreateMaterialDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createMaterial');
    },
    removeMaterial(variables: RemoveMaterialVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveMaterial> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveMaterial>(RemoveMaterialDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeMaterial');
    },
    updateMaterial(variables: UpdateMaterialVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateMaterial> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateMaterial>(UpdateMaterialDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateMaterial');
    },
    getDetailMaterial(variables: GetDetailMaterialVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDetailMaterial> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDetailMaterial>(GetDetailMaterialDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDetailMaterial');
    },
    getListMaterials(variables?: GetListMaterialsVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListMaterials> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListMaterials>(GetListMaterialsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListMaterials');
    },
    getTotalCount(variables: GetTotalCountVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTotalCount> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTotalCount>(GetTotalCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTotalCount');
    },
    createStyle(variables: CreateStyleVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateStyle> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateStyle>(CreateStyleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createStyle');
    },
    removeStyle(variables: RemoveStyleVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveStyle> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveStyle>(RemoveStyleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeStyle');
    },
    updateStyle(variables: UpdateStyleVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateStyle> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateStyle>(UpdateStyleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateStyle');
    },
    getStyle(variables: GetStyleVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetStyle> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStyle>(GetStyleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStyle');
    },
    getListStyles(variables?: GetListStylesVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListStyles> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListStyles>(GetListStylesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListStyles');
    },
    createThemeCategory(variables: CreateThemeCategoryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateThemeCategory> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateThemeCategory>(CreateThemeCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createThemeCategory');
    },
    createTheme(variables: CreateThemeVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateTheme> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTheme>(CreateThemeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTheme');
    },
    createThemeImage(variables: CreateThemeImageVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateThemeImage> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateThemeImage>(CreateThemeImageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createThemeImage');
    },
    removeTheme(variables: RemoveThemeVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveTheme> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveTheme>(RemoveThemeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeTheme');
    },
    updateThemeCategory(variables: UpdateThemeCategoryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateThemeCategory> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateThemeCategory>(UpdateThemeCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateThemeCategory');
    },
    updateTheme(variables: UpdateThemeVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateTheme> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTheme>(UpdateThemeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateTheme');
    },
    updateThemeImage(variables: UpdateThemeImageVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateThemeImage> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateThemeImage>(UpdateThemeImageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateThemeImage');
    },
    getDetailTheme(variables: GetDetailThemeVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDetailTheme> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDetailTheme>(GetDetailThemeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDetailTheme');
    },
    getListThemes(variables?: GetListThemesVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListThemes> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListThemes>(GetListThemesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListThemes');
    },
    createCustomer(variables: CreateCustomerVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateCustomer> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCustomer>(CreateCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCustomer');
    },
    removeUser(variables: RemoveUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveUser>(RemoveUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeUser');
    },
    updateUser(variables: UpdateUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUser>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser');
    },
    getUser(variables: GetUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUser>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUser');
    },
    getListUsers(variables?: GetListUsersVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListUsers> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListUsers>(GetListUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListUsers');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;