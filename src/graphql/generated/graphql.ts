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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Cats = {
  __typename?: 'Cats';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ChangePasswordInput = {
  confirmPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  password: Scalars['String'];
};

export type ContentDto = {
  __typename?: 'ContentDto';
  _id: Scalars['ID'];
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  groupName: Scalars['String'];
  images?: Maybe<Array<ContentImageDto>>;
  name: Scalars['String'];
  price: Scalars['Float'];
  type: TypeName;
  updatedAt: Scalars['DateTime'];
};

export type ContentImageDto = {
  __typename?: 'ContentImageDto';
  _id: Scalars['String'];
  content?: Maybe<ContentDto>;
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
};

export type ContentImageInput = {
  contentId: Scalars['String'];
  isDefault: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
};

export type ContentImageSearch = {
  regex?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

export type ContentImageTableParameter = {
  length: Scalars['Int'];
  search?: InputMaybe<ContentImageSearch>;
  start: Scalars['Int'];
};

/** content input */
export type ContentInput = {
  code: Scalars['String'];
  groupName: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  type: TypeName;
};

export type ContentSearch = {
  regex?: InputMaybe<Scalars['String']>;
  typeNames: TypeNamesExtend;
  value: Scalars['String'];
};

export type ContentTableParameter = {
  length: Scalars['Int'];
  search?: InputMaybe<ContentSearch>;
  start: Scalars['Int'];
};

export type CreateUserByAdminInput = {
  address?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role: RolesName;
};

export type Jwt = {
  __typename?: 'JWT';
  expiresAt: Scalars['Float'];
  refreshToken: Scalars['String'];
  token: Scalars['String'];
  user: Users;
};

export type LoginAdminInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Scalars['Boolean'];
  confirmResetPasswordEmailToken: Scalars['Boolean'];
  confirmVerifyEmailToken: Scalars['Boolean'];
  createContent: ContentDto;
  createContentImage: ContentImageDto;
  createUser: Scalars['Boolean'];
  deleteContent: Scalars['Float'];
  deleteContentImage: Scalars['Float'];
  deleteCurrentUser: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Jwt;
  loginAdmin: Jwt;
  logout: Scalars['Boolean'];
  register: Jwt;
  resetPassword: Scalars['Boolean'];
  restoreContent: Scalars['Float'];
  restoreUser: Scalars['Boolean'];
  sendResetPasswordEmailToken: Scalars['Boolean'];
  sendUserVerifyEmailToken: Scalars['Boolean'];
  updateContent: Scalars['Boolean'];
  updateContentImage: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  id: Scalars['String'];
  passwordInput: ChangePasswordInput;
};


export type MutationConfirmResetPasswordEmailTokenArgs = {
  token: Scalars['String'];
};


export type MutationConfirmVerifyEmailTokenArgs = {
  token: Scalars['String'];
};


export type MutationCreateContentArgs = {
  newContent: ContentInput;
};


export type MutationCreateContentImageArgs = {
  newImage: ContentImageInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserByAdminInput;
};


export type MutationDeleteContentArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationDeleteContentImageArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationLoginAdminArgs = {
  loginAdminInput: LoginAdminInput;
};


export type MutationRegisterArgs = {
  createUserInput: CreateUserInput;
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRestoreContentArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationRestoreUserArgs = {
  id: Scalars['String'];
};


export type MutationSendResetPasswordEmailTokenArgs = {
  email: Scalars['String'];
};


export type MutationSendUserVerifyEmailTokenArgs = {
  email: Scalars['String'];
};


export type MutationUpdateContentArgs = {
  content: ContentInput;
  id: Scalars['String'];
};


export type MutationUpdateContentImageArgs = {
  id: Scalars['String'];
  image: ContentImageInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  userInfo: UpdateUserInput;
};

export type PaginatedContentImageResponse = {
  __typename?: 'PaginatedContentImageResponse';
  items: Array<ContentImageDto>;
  total: Scalars['Int'];
  totalFilter: Scalars['Int'];
};

export type PaginatedContentResponse = {
  __typename?: 'PaginatedContentResponse';
  items: Array<ContentDto>;
  total: Scalars['Int'];
  totalFilter: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getAllCats: Array<Cats>;
  getAllContentImages: Array<ContentImageDto>;
  getAllContents: Array<ContentDto>;
  getAllUser: Array<Users>;
  getContent: ContentDto;
  getContentImage: ContentImageDto;
  getPaginationContent: PaginatedContentResponse;
  getPaginationContentImage: PaginatedContentImageResponse;
  getUser: Users;
  me: Users;
};


export type QueryGetAllContentsArgs = {
  deleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetAllUserArgs = {
  deleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetContentArgs = {
  id: Scalars['String'];
};


export type QueryGetContentImageArgs = {
  id: Scalars['String'];
};


export type QueryGetPaginationContentArgs = {
  data: ContentTableParameter;
};


export type QueryGetPaginationContentImageArgs = {
  data: ContentImageTableParameter;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};

/** Roles name ! */
export enum RolesName {
  Admin = 'ADMIN',
  User = 'USER',
  Req = 'req'
}

/** Types name ! */
export enum TypeName {
  Custom = 'CUSTOM',
  Design = 'DESIGN',
  Type = 'TYPE'
}

/** extend types name for searching */
export enum TypeNamesExtend {
  All = 'ALL',
  Custom = 'CUSTOM',
  Design = 'DESIGN',
  Type = 'TYPE'
}

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type Users = {
  __typename?: 'Users';
  _id: Scalars['String'];
  address: Scalars['String'];
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type JwtFields = { __typename: 'JWT', expiresAt: number, refreshToken: string, token: string, user: { __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: any, address: string, role: string, updatedAt: any, confirmed: boolean } };

export type IUsersFields = { __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: any, address: string, role: string, updatedAt: any, confirmed: boolean };

export type LoginAdminVariables = Exact<{
  loginAdminInput: LoginAdminInput;
}>;


export type LoginAdmin = { __typename?: 'Mutation', loginAdmin: { __typename?: 'JWT', expiresAt: number, refreshToken: string, token: string, user: { __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: any, address: string, role: string, updatedAt: any, confirmed: boolean } } };

export type CreateUserVariables = Exact<{
  createUserInput: CreateUserByAdminInput;
}>;


export type CreateUser = { __typename?: 'Mutation', createUser: boolean };

export type DeleteUserVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUser = { __typename?: 'Mutation', deleteUser: boolean };

export type UpdateUserVariables = Exact<{
  userInfo: UpdateUserInput;
  id: Scalars['String'];
}>;


export type UpdateUser = { __typename?: 'Mutation', updateUser: boolean };

export type GetAllUserVariables = Exact<{
  deleted?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetAllUser = { __typename?: 'Query', getAllUser: Array<{ __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: any, address: string, role: string, updatedAt: any, confirmed: boolean }> };

export type GetUserVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUser = { __typename?: 'Query', getUser: { __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: any, address: string, role: string, updatedAt: any, confirmed: boolean } };

export type MeVariables = Exact<{ [key: string]: never; }>;


export type Me = { __typename?: 'Query', me: { __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: any, address: string, role: string, updatedAt: any, confirmed: boolean } };

export const IUsersFields = gql`
    fragment IUsersFields on Users {
  __typename
  _id
  email
  name
  phone
  firstName
  lastName
  createdAt
  address
  role
  updatedAt
  confirmed
}
    `;
export const JwtFields = gql`
    fragment JWTFields on JWT {
  __typename
  expiresAt
  refreshToken
  user {
    ...IUsersFields
  }
  token
}
    ${IUsersFields}`;
export const LoginAdminDocument = gql`
    mutation loginAdmin($loginAdminInput: LoginAdminInput!) {
  loginAdmin(loginAdminInput: $loginAdminInput) {
    expiresAt
    refreshToken
    user {
      ...IUsersFields
    }
    token
  }
}
    ${IUsersFields}`;
export const CreateUserDocument = gql`
    mutation createUser($createUserInput: CreateUserByAdminInput!) {
  createUser(createUserInput: $createUserInput)
}
    `;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: String!) {
  deleteUser(id: $id)
}
    `;
export const UpdateUserDocument = gql`
    mutation updateUser($userInfo: UpdateUserInput!, $id: String!) {
  updateUser(userInfo: $userInfo, id: $id)
}
    `;
export const GetAllUserDocument = gql`
    query getAllUser($deleted: Boolean) {
  getAllUser(deleted: $deleted) {
    ...IUsersFields
  }
}
    ${IUsersFields}`;
export const GetUserDocument = gql`
    query getUser($id: String!) {
  getUser(id: $id) {
    ...IUsersFields
  }
}
    ${IUsersFields}`;
export const MeDocument = gql`
    query me {
  me {
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
    createUser(variables: CreateUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUser>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser');
    },
    deleteUser(variables: DeleteUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUser>(DeleteUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser');
    },
    updateUser(variables: UpdateUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUser>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser');
    },
    getAllUser(variables?: GetAllUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllUser>(GetAllUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllUser');
    },
    getUser(variables: GetUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUser>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUser');
    },
    me(variables?: MeVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Me> {
      return withWrapper((wrappedRequestHeaders) => client.request<Me>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'me');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;