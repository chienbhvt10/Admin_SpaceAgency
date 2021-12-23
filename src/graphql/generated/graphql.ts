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
  confirmEmailToken: Scalars['Boolean'];
  createUser: Jwt;
  deleteCurrentUser: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Jwt;
  loginAdmin: Jwt;
  logout: Scalars['Boolean'];
  restoreUser: Scalars['Boolean'];
  sendEmailConfirmation: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  id: Scalars['String'];
  passwordInput: ChangePasswordInput;
};


export type MutationConfirmEmailTokenArgs = {
  token: Scalars['String'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
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


export type MutationRestoreUserArgs = {
  id: Scalars['String'];
};


export type MutationSendEmailConfirmationArgs = {
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  userInfo: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getAllCats: Array<Cats>;
  getAllUser: Array<Users>;
  getUser: Users;
  me: Users;
};


export type QueryGetAllUserArgs = {
  deleted?: InputMaybe<Scalars['Boolean']>;
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
  Confirmed: Scalars['Boolean'];
  _id: Scalars['String'];
  address: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type JwtFields = { __typename: 'JWT', expiresAt: number, refreshToken: string, token: string, user: { __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: string, address: string, role: string, updatedAt: string, Confirmed: boolean } };

export type IUsersFields = { __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: string, address: string, role: string, updatedAt: string, Confirmed: boolean };

export type LoginAdminVariables = Exact<{
  loginAdminInput: LoginAdminInput;
}>;


export type LoginAdmin = { __typename?: 'Mutation', loginAdmin: { __typename?: 'JWT', expiresAt: number, refreshToken: string, token: string, user: { __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: string, address: string, role: string, updatedAt: string, Confirmed: boolean } } };

export type MeVariables = Exact<{ [key: string]: never; }>;


export type Me = { __typename?: 'Query', me: { __typename: 'Users', _id: string, email: string, name: string, phone?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, createdAt: string, address: string, role: string, updatedAt: string, Confirmed: boolean } };

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
  Confirmed
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
    me(variables?: MeVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Me> {
      return withWrapper((wrappedRequestHeaders) => client.request<Me>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'me');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;