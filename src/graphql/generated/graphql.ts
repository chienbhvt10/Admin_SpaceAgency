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

export type ContentImageInput = {
  contentId: Scalars['String'];
  isDefault: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
};

export type ContentImages = {
  __typename?: 'ContentImages';
  _id: Scalars['String'];
  content?: Maybe<Contents>;
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
};

/** content input */
export type ContentInput = {
  code: Scalars['String'];
  groupName: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  type: TypeName;
};

export type Contents = {
  __typename?: 'Contents';
  _id: Scalars['ID'];
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  groupName: Scalars['String'];
  images?: Maybe<Array<ContentImages>>;
  name: Scalars['String'];
  price: Scalars['Float'];
  type: TypeName;
  updatedAt: Scalars['DateTime'];
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
  createContent: Contents;
  createContentImage: ContentImages;
  createUser: Jwt;
  deleteContent: Scalars['Float'];
  deleteContentImage: Scalars['Float'];
  deleteCurrentUser: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Jwt;
  loginAdmin: Jwt;
  logout: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  restoreContent: Scalars['Float'];
  restoreUser: Scalars['Boolean'];
  sendEmailConfirmation: Scalars['Boolean'];
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
  createUserInput: CreateUserInput;
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


export type MutationSendEmailConfirmationArgs = {
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

export type Query = {
  __typename?: 'Query';
  getAllCats: Array<Cats>;
  getAllContentImages: Array<ContentImages>;
  getAllContents: Array<Contents>;
  getAllUser: Array<Users>;
  getContent: Contents;
  getContentImage: ContentImages;
  getUser: Users;
  me: Users;
  searchContents: Array<Contents>;
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


export type QueryGetUserArgs = {
  id: Scalars['String'];
};


export type QuerySearchContentsArgs = {
  keyword: Scalars['String'];
  type: TypeNamesExtend;
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

export type GetAllUserVariables = Exact<{
  deleted?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetAllUser = { __typename?: 'Query', getAllUser: Array<{ __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: any, address: string, role: string, updatedAt: any, confirmed: boolean }> };

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
export const GetAllUserDocument = gql`
    query getAllUser($deleted: Boolean) {
  getAllUser(deleted: $deleted) {
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
    getAllUser(variables?: GetAllUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllUser>(GetAllUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllUser');
    },
    me(variables?: MeVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Me> {
      return withWrapper((wrappedRequestHeaders) => client.request<Me>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'me');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;