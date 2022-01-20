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

export type ChangePasswordInput = {
  newPass: Scalars['String'];
  oldPass: Scalars['String'];
};

export type CreateAuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
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
  /** title of material type */
  title: Scalars['String'];
};

export type CreateQuotationInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
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
  type?: InputMaybe<RequestType>;
};

export type CreateSimulationComponentInput = {
  materialTypes: Array<RefInput>;
  style: RefInput;
  theme: RefInput;
};

export type CreateSimulationInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateStyleInput = {
  /** 3d code of style */
  code3d?: InputMaybe<Scalars['String']>;
  /** description of style */
  description?: InputMaybe<Scalars['String']>;
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
  id: Scalars['String'];
  materialTypes: Array<MaterialType>;
  style: Style;
  title?: Maybe<Scalars['String']>;
};


export type MaterialMaterialTypesArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};

export type MaterialType = {
  __typename?: 'MaterialType';
  code3d?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  material?: Maybe<Material>;
  price?: Maybe<Price>;
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change current user password */
  changePassword: Scalars['Boolean'];
  /** Create new Admin */
  createAdmin: User;
  /** Create new Customer */
  createCustomer: User;
  /** Create new Material */
  createMaterial: Material;
  /** Create new Material Type */
  createMaterialType: MaterialType;
  createQuotation: Quotation;
  createRequest: Request;
  createSimulation: Simulation;
  createSimulationComponent: SimulationComponent;
  /** Create new style */
  createStyle: Style;
  createTheme: Theme;
  createThemeCategory: ThemeCategory;
  createThemeImage: ThemeImage;
  loginAdmin: Auth;
  loginCustomer: Auth;
  /** find one material and remove */
  removeMaterial: Material;
  /** find one and remove material type */
  removeMaterialType: MaterialType;
  removeQuotation: Quotation;
  removeRequest: Request;
  removeSimulation: Simulation;
  removeSimulationComponent: SimulationComponent;
  removeStyle: Style;
  removeTheme: Theme;
  removeThemeCategory: ThemeCategory;
  removeThemeImage: ThemeImage;
  /** Remove user by id */
  removeUser: User;
  /** find one material and update */
  updateMaterial: Material;
  /** find one material type and update */
  updateMaterialType: MaterialType;
  updateQuotation: Quotation;
  updateRequest: Request;
  updateSimulation: Simulation;
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


export type MutationCreateCustomerArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateMaterialArgs = {
  createMaterialInput: CreateMaterialInput;
};


export type MutationCreateMaterialTypeArgs = {
  createMaterialTypeInput: CreateMaterialTypeInput;
};


export type MutationCreateQuotationArgs = {
  createQuotationInput: CreateQuotationInput;
};


export type MutationCreateRequestArgs = {
  createRequestInput: CreateRequestInput;
};


export type MutationCreateSimulationArgs = {
  createSimulationInput: CreateSimulationInput;
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


export type MutationRemoveMaterialArgs = {
  id: Scalars['String'];
};


export type MutationRemoveMaterialTypeArgs = {
  id: Scalars['String'];
};


export type MutationRemoveQuotationArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveRequestArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveSimulationArgs = {
  id: Scalars['Int'];
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


export type MutationUpdateMaterialArgs = {
  updateMaterialInput: UpdateMaterialInput;
};


export type MutationUpdateMaterialTypeArgs = {
  updateMaterialType: UpdateMaterialTypeInput;
};


export type MutationUpdateQuotationArgs = {
  updateQuotationInput: UpdateQuotationInput;
};


export type MutationUpdateRequestArgs = {
  updateRequestInput: UpdateRequestInput;
};


export type MutationUpdateSimulationArgs = {
  updateSimulationInput: UpdateSimulationInput;
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

export type Price = {
  __typename?: 'Price';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  refId: Scalars['String'];
  refType: RefType;
  unit: CurrencyUnit;
  updatedAt: Scalars['DateTime'];
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
  materials: Array<Material>;
  /** Get current user profile */
  me: User;
  quotation: Quotation;
  quotations: Array<Quotation>;
  request: Request;
  requests: Array<Request>;
  simulation: Simulation;
  simulationComponent?: Maybe<SimulationComponent>;
  simulationComponents: Array<SimulationComponent>;
  simulations: Array<Simulation>;
  /** find one style */
  style: Style;
  /** find all styles */
  styles: Array<Style>;
  theme: Theme;
  themeCategories: Array<ThemeCategory>;
  themeCategory: ThemeCategory;
  themeImage: ThemeImage;
  themeImages: Array<ThemeImage>;
  themes: Array<Theme>;
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


export type QueryQuotationArgs = {
  id: Scalars['Int'];
};


export type QueryRequestArgs = {
  id: Scalars['Int'];
};


export type QuerySimulationArgs = {
  id: Scalars['Int'];
};


export type QuerySimulationComponentArgs = {
  id: Scalars['String'];
};


export type QuerySimulationComponentsArgs = {
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


export type QueryThemeImageArgs = {
  id: Scalars['String'];
};


export type QueryThemeImagesArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
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
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
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
  email: Scalars['String'];
  furigana: Scalars['String'];
  hasLand: Scalars['Boolean'];
  id: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  requesterFullName: Scalars['String'];
  type: RequestType;
  user: User;
};

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
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type SimulationComponent = {
  __typename?: 'SimulationComponent';
  id: Scalars['String'];
  materialTypes?: Maybe<Array<MaterialType>>;
  style?: Maybe<Style>;
  theme?: Maybe<Theme>;
};

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
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  materials: Array<Material>;
  price?: Maybe<Price>;
  theme?: Maybe<Theme>;
  title?: Maybe<Scalars['String']>;
};


export type StyleMaterialsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
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
  theme?: Maybe<Theme>;
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
  /** title of material type */
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateQuotationInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateRequestInput = {
  address?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  furigana?: InputMaybe<Scalars['String']>;
  hasLand?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  phone?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
  requesterFullName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<RequestType>;
};

export type UpdateSimulationComponentInput = {
  id: Scalars['String'];
  materialTypes?: InputMaybe<Array<RefInput>>;
  style?: InputMaybe<RefInput>;
  theme?: InputMaybe<RefInput>;
};

export type UpdateSimulationInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateStyleInput = {
  /** 3d code of style */
  code3d?: InputMaybe<Scalars['String']>;
  /** description of style */
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
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
};

export type WhereInput = {
  filter?: InputMaybe<Array<FilterInput>>;
  sort?: InputMaybe<Array<SortInput>>;
};

export type AuthFields = { __typename?: 'Auth', refreshToken?: string | null | undefined, accessToken?: string | null | undefined };

export type IMaterialTypeFields = { __typename?: 'MaterialType', id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt: any, updatedAt: any, refId: string, refType: RefType } | null | undefined, material?: { __typename?: 'Material', id: string, title?: string | null | undefined } | null | undefined };

export type IMaterialFields = { __typename?: 'Material', id: string, title?: string | null | undefined, style: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt: any, updatedAt: any, refId: string, refType: RefType } | null | undefined }, materialTypes: Array<{ __typename?: 'MaterialType', id: string, title?: string | null | undefined, code3d?: string | null | undefined, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt: any, updatedAt: any, refId: string, refType: RefType } | null | undefined, material?: { __typename?: 'Material', id: string, title?: string | null | undefined } | null | undefined }> };

export type IPrice = { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt: any, updatedAt: any, refId: string, refType: RefType };

export type IStyle = { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined };

export type ITheme = { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt: any, updatedAt: any, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined }> | null | undefined };

export type IThemeImage = { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined };

export type IThemeCategory = { __typename?: 'ThemeCategory', id: string, title: string };

export type IUsersFields = { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined };

export type LoginAdminVariables = Exact<{
  loginInput: CreateAuthInput;
}>;


export type LoginAdmin = { __typename?: 'Mutation', loginAdmin: { __typename?: 'Auth', refreshToken?: string | null | undefined, accessToken?: string | null | undefined } };

export type MeVariables = Exact<{ [key: string]: never; }>;


export type Me = { __typename?: 'Query', me: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, firstNameF?: string | null | undefined, lastNameF?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, role?: Role | null | undefined } };

export type CreateStyleVariables = Exact<{
  createStyleInput: CreateStyleInput;
}>;


export type CreateStyle = { __typename?: 'Mutation', createStyle: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined } };

export type RemoveStyleVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveStyle = { __typename?: 'Mutation', removeStyle: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined } };

export type UpdateStyleVariables = Exact<{
  updateStyleInput: UpdateStyleInput;
}>;


export type UpdateStyle = { __typename?: 'Mutation', updateStyle: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined } };

export type GetStyleVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetStyle = { __typename?: 'Query', style: { __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined } };

export type GetListStyleVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListStyle = { __typename?: 'Query', styles: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined }> };

export type RemoveThemeVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveTheme = { __typename?: 'Mutation', removeTheme: { __typename?: 'Theme', id: string, title: string } };

export type GetDetailThemeVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDetailTheme = { __typename?: 'Query', theme: { __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt: any, updatedAt: any, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined }> | null | undefined } };

export type GetListThemesVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
}>;


export type GetListThemes = { __typename?: 'Query', themes: Array<{ __typename?: 'Theme', id: string, title: string, description?: string | null | undefined, code3D?: string | null | undefined, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt: any, updatedAt: any, refId: string, refType: RefType } | null | undefined, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null | undefined, insidePreviewUrl?: string | null | undefined } | null | undefined, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null | undefined, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null | undefined, code3d?: string | null | undefined, description?: string | null | undefined }> | null | undefined }> };

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
export const IMaterialTypeFields = gql`
    fragment IMaterialTypeFields on MaterialType {
  id
  title
  code3d
  price {
    ...IPrice
  }
  material {
    id
    title
  }
}
    ${IPrice}`;
export const IMaterialFields = gql`
    fragment IMaterialFields on Material {
  id
  title
  style {
    id
    title
    code3d
    description
    price {
      ...IPrice
    }
  }
  materialTypes {
    ...IMaterialTypeFields
  }
}
    ${IPrice}
${IMaterialTypeFields}`;
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
export const IStyle = gql`
    fragment IStyle on Style {
  id
  title
  code3d
  description
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
    ...IStyle
  }
}
    ${IStyle}`;
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
export const GetListStyleDocument = gql`
    query getListStyle($where: WhereInput, $pagination: PaginationInput) {
  styles(where: $where, pagination: $pagination) {
    ...IStyle
  }
}
    ${IStyle}`;
export const RemoveThemeDocument = gql`
    mutation removeTheme($id: String!) {
  removeTheme(id: $id) {
    id
    title
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
    getListStyle(variables?: GetListStyleVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListStyle> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListStyle>(GetListStyleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListStyle');
    },
    removeTheme(variables: RemoveThemeVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveTheme> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveTheme>(RemoveThemeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeTheme');
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