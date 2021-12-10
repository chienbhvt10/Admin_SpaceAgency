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

export type CreateUserInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type ICats = {
  __typename?: 'ICats';
  age: Scalars['Float'];
  breed: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IUsers = {
  __typename?: 'IUsers';
  createAt: Scalars['Float'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type Jwt = {
  __typename?: 'JWT';
  expiresAt: Scalars['Float'];
  token: Scalars['String'];
  user: IUsers;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: Jwt;
  login: Jwt;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationLoginArgs = {
  loginInput: LoginUserInput;
};

export type Query = {
  __typename?: 'Query';
  getAllCats: Array<ICats>;
  me: IUsers;
};

export type JwtFields = {
  __typename?: 'JWT';
  expiresAt: number;
  token: string;
  user: { __typename?: 'IUsers'; id: string; email: string; firstName: string; lastName: string; createAt: number };
};

export type LoginVariables = Exact<{
  loginInput: LoginUserInput;
}>;

export type Login = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'JWT';
    expiresAt: number;
    token: string;
    user: { __typename?: 'IUsers'; id: string; email: string; firstName: string; lastName: string; createAt: number };
  };
};
// eslint-disable-next-line
export const JwtFields = gql`
  fragment JWTFields on JWT {
    expiresAt
    user {
      id
      email
      firstName
      lastName
      createAt
    }
    token
  }
`;
export const LoginDocument = gql`
  mutation login($loginInput: LoginUserInput!) {
    login(loginInput: $loginInput) {
      ...JWTFields
    }
  }
  ${JwtFields}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    login(variables: LoginVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<Login> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Login>(LoginDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'login',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
