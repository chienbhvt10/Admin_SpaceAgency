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

export type CreateManagerInput = {
  /** Example field (placeholder) */
  name: Scalars['String'];
  staffs?: InputMaybe<Array<RefInput>>;
};

export type CreateMaterialInput = {
  /** list new material type */
  materialTypes?: InputMaybe<Array<CreateMaterialTypeInput>>;
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
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateSimulationComponentInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateSimulationInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateStaffInput = {
  manager: RefInput;
  name: Scalars['String'];
};

export type CreateStyleInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateThemeInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type FilterInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type GetStaffsInput = {
  manager?: InputMaybe<RefInput>;
  paging?: InputMaybe<PaginationInput>;
};

export type Manager = {
  __typename?: 'Manager';
  id: Scalars['String'];
  name: Scalars['String'];
  staffs: Array<Staff>;
};


export type ManagerStaffsArgs = {
  where?: InputMaybe<GetStaffsInput>;
};

export type Material = {
  __typename?: 'Material';
  id: Scalars['String'];
  materialTypes: Array<MaterialType>;
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
  createManager: Manager;
  /** Create new Material */
  createMaterial: Material;
  /** Create new Material Type */
  createMaterialType: MaterialType;
  createQuotation: Quotation;
  createRequest: Request;
  createSimulation: Simulation;
  createSimulationComponent: SimulationComponent;
  createStaff: Staff;
  createStyle: Style;
  createTheme: Theme;
  loginAdmin: Auth;
  loginCustomer: Auth;
  removeManager: Manager;
  removeMaterial: Material;
  removeQuotation: Quotation;
  removeRequest: Request;
  removeSimulation: Simulation;
  removeSimulationComponent: SimulationComponent;
  removeStaff: Staff;
  removeStyle: Style;
  removeTheme: Theme;
  /** Remove user by id */
  removeUser: User;
  updateManager: Manager;
  updateMaterial: Material;
  updateQuotation: Quotation;
  updateRequest: Request;
  updateSimulation: Simulation;
  updateSimulationComponent: SimulationComponent;
  updateStaff: Staff;
  updateStyle: Style;
  updateTheme: Theme;
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


export type MutationCreateManagerArgs = {
  createManagerInput: CreateManagerInput;
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


export type MutationCreateStaffArgs = {
  createStaffInput: CreateStaffInput;
};


export type MutationCreateStyleArgs = {
  createStyleInput: CreateStyleInput;
};


export type MutationCreateThemeArgs = {
  createThemeInput: CreateThemeInput;
};


export type MutationLoginAdminArgs = {
  loginInput: CreateAuthInput;
};


export type MutationLoginCustomerArgs = {
  loginInput: CreateAuthInput;
};


export type MutationRemoveManagerArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMaterialArgs = {
  id: Scalars['Int'];
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
  id: Scalars['Int'];
};


export type MutationRemoveStaffArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveStyleArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveThemeArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateManagerArgs = {
  updateManagerInput: UpdateManagerInput;
};


export type MutationUpdateMaterialArgs = {
  updateMaterialInput: UpdateMaterialInput;
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


export type MutationUpdateStaffArgs = {
  updateStaffInput: UpdateStaffInput;
};


export type MutationUpdateStyleArgs = {
  updateStyleInput: UpdateStyleInput;
};


export type MutationUpdateThemeArgs = {
  updateThemeInput: UpdateThemeInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  manager: Manager;
  managers: Array<Manager>;
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
  simulationComponent: SimulationComponent;
  simulationComponents: Array<SimulationComponent>;
  simulations: Array<Simulation>;
  staff: Staff;
  staffs: Array<Staff>;
  style: Style;
  styles: Array<Style>;
  theme: Theme;
  themes: Array<Theme>;
  /** Get user by id  */
  user: User;
  /** Get all user */
  users: Array<User>;
};


export type QueryManagerArgs = {
  id: Scalars['Int'];
};


export type QueryManagersArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QueryMaterialArgs = {
  id: Scalars['Int'];
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
  id: Scalars['Int'];
};


export type QueryStaffArgs = {
  id: Scalars['Int'];
};


export type QueryStaffsArgs = {
  getStaffsInput: GetStaffsInput;
};


export type QueryStyleArgs = {
  id: Scalars['Int'];
};


export type QueryThemeArgs = {
  id: Scalars['Int'];
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
  id?: InputMaybe<Scalars['String']>;
};

export type Request = {
  __typename?: 'Request';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export enum Role {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Sysadmin = 'SYSADMIN'
}

export type Simulation = {
  __typename?: 'Simulation';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type SimulationComponent = {
  __typename?: 'SimulationComponent';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type SortInput = {
  key: Scalars['String'];
  value?: InputMaybe<SortValue>;
};

export enum SortValue {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Staff = {
  __typename?: 'Staff';
  id: Scalars['String'];
  manager?: Maybe<Manager>;
  name: Scalars['String'];
};

export type Style = {
  __typename?: 'Style';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Theme = {
  __typename?: 'Theme';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type UpdateManagerInput = {
  id: Scalars['String'];
  /** Example field (placeholder) */
  name?: InputMaybe<Scalars['String']>;
  staffs?: InputMaybe<Array<RefInput>>;
};

export type UpdateMaterialInput = {
  id: Scalars['Int'];
  /** list new material type */
  materialTypes?: InputMaybe<Array<CreateMaterialTypeInput>>;
  /** tile of material */
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateQuotationInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateRequestInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateSimulationComponentInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateSimulationInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateStaffInput = {
  id: Scalars['Int'];
  manager?: InputMaybe<RefInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateStyleInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateThemeInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type WhereInput = {
  filter?: InputMaybe<Array<FilterInput>>;
  sort?: InputMaybe<Array<SortInput>>;
};

export type AuthFields = { __typename?: 'Auth', refreshToken?: string | null | undefined, accessToken?: string | null | undefined };

export type IUsersFields = { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, role?: Role | null | undefined };

export type LoginAdminVariables = Exact<{
  loginInput: CreateAuthInput;
}>;


export type LoginAdmin = { __typename?: 'Mutation', loginAdmin: { __typename?: 'Auth', refreshToken?: string | null | undefined, accessToken?: string | null | undefined } };

export type MeVariables = Exact<{ [key: string]: never; }>;


export type Me = { __typename?: 'Query', me: { __typename?: 'User', id: string, email?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, role?: Role | null | undefined } };

export const AuthFields = gql`
    fragment AuthFields on Auth {
  refreshToken
  accessToken
}
    `;
export const IUsersFields = gql`
    fragment IUsersFields on User {
  id
  email
  firstName
  lastName
  role
}
    `;
export const LoginAdminDocument = gql`
    mutation LoginAdmin($loginInput: CreateAuthInput!) {
  loginAdmin(loginInput: $loginInput) {
    refreshToken
    accessToken
  }
}
    `;
export const MeDocument = gql`
    query Me {
  me {
    ...IUsersFields
  }
}
    ${IUsersFields}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    LoginAdmin(variables: LoginAdminVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginAdmin> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginAdmin>(LoginAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LoginAdmin');
    },
    Me(variables?: MeVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Me> {
      return withWrapper((wrappedRequestHeaders) => client.request<Me>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Me');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;