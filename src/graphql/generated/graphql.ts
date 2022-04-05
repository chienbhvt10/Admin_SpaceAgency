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

export type AppointmentRequest = {
  __typename?: 'AppointmentRequest';
  address: Scalars['String'];
  appointmentDate1?: Maybe<Scalars['DateTime']>;
  appointmentDate2?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  furigana: Scalars['String'];
  id: Scalars['String'];
  question?: Maybe<Scalars['String']>;
  requesterFullName: Scalars['String'];
  tel: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type ContactRequest = {
  __typename?: 'ContactRequest';
  appointmentRequest?: Maybe<AppointmentRequest>;
  businessCustomer?: Maybe<BusinessCustomer>;
  documentRequest?: Maybe<DocumentRequest>;
  id: Scalars['String'];
  status: ContactRequestStatus;
  type: ContactRequestType;
};

export enum ContactRequestStatus {
  Accepted = 'ACCEPTED',
  Cancel = 'CANCEL',
  Done = 'DONE',
  Open = 'OPEN',
  Rejected = 'REJECTED'
}

export enum ContactRequestType {
  BusinessCustomer = 'BUSINESS_CUSTOMER',
  DocumentRequest = 'DOCUMENT_REQUEST'
}

export type CreateAppointmentRequestInput = {
  address: Scalars['String'];
  appointmentDate1?: InputMaybe<Scalars['DateTime']>;
  appointmentDate2?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  furigana: Scalars['String'];
  question?: InputMaybe<Scalars['String']>;
  requesterFullName: Scalars['String'];
  tel: Scalars['String'];
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

export type CreateContactRequestInput = {
  appointmentRequest?: InputMaybe<RefInput>;
  businessCustomer?: InputMaybe<RefInput>;
  documentRequest?: InputMaybe<RefInput>;
  type: ContactRequestType;
};

export type CreateDocumentRequestInput = {
  address: Scalars['String'];
  age?: InputMaybe<DocumentRequestAge>;
  currentHouseType?: InputMaybe<CurrentHouseType>;
  desiredContactMethod?: InputMaybe<DesiredContactMethod>;
  desiredDeploymentTime?: InputMaybe<DesiredDeploymentTime>;
  documentType: DocumentType;
  email: Scalars['String'];
  furigana: Scalars['String'];
  hasLand?: InputMaybe<Scalars['Boolean']>;
  marketingChannels?: InputMaybe<Array<MarketingChannel>>;
  question?: InputMaybe<Scalars['String']>;
  requesterFullName: Scalars['String'];
  tel: Scalars['String'];
};

export type CreateMaterialImageInput = {
  materialType: RefInput;
  /** preview url of image */
  previewImageUrl: Scalars['String'];
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
  /** image url */
  previewImageUrl?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<CreatePriceInput>;
  /** title of material type */
  title: Scalars['String'];
};

export type CreatePriceInput = {
  unit: CurrencyUnit;
  value: Scalars['Float'];
};

export type CreateRequestInput = {
  address: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
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

export type CreateStyleImageInput = {
  /** preview url of image */
  previewImageUrl: Scalars['String'];
  style: RefInput;
};

export type CreateStyleInput = {
  /** 3d code of style */
  code3d?: InputMaybe<Scalars['String']>;
  /** description of style */
  description?: InputMaybe<Scalars['String']>;
  /** image url */
  previewImageUrl?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<CreatePriceInput>;
  theme?: InputMaybe<RefInput>;
  /** title of style */
  title: Scalars['String'];
};

export type CreateThemeCategoryInput = {
  title: Scalars['String'];
};

export type CreateThemeImageInput = {
  diagramImage?: InputMaybe<Scalars['String']>;
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
  postcode?: InputMaybe<Scalars['String']>;
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

/** The house is in use */
export enum CurrentHouseType {
  /** personal house */
  PersonalHouse = 'PERSONAL_HOUSE',
  /** Rent house - apartment - house in company - living with parent */
  RentHouse = 'RENT_HOUSE'
}

/** Contact method if you want */
export enum DesiredContactMethod {
  Email = 'EMAIL',
  Meeting = 'MEETING',
  Phone = 'PHONE'
}

/** When is the plan to do? */
export enum DesiredDeploymentTime {
  Over_03Years = 'OVER_03_YEARS',
  Within_01Year = 'WITHIN_01_YEAR',
  Within_03Months = 'WITHIN_03_MONTHS',
  Within_03Years = 'WITHIN_03_YEARS',
  Within_06Months = 'WITHIN_06_MONTHS'
}

export type DocumentRequest = {
  __typename?: 'DocumentRequest';
  address: Scalars['String'];
  age?: Maybe<DocumentRequestAge>;
  currentHouseType?: Maybe<CurrentHouseType>;
  desiredContactMethod?: Maybe<DesiredContactMethod>;
  desiredDeploymentTime?: Maybe<DesiredDeploymentTime>;
  documentType: DocumentType;
  email: Scalars['String'];
  furigana: Scalars['String'];
  hasLand?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  marketingChannels?: Maybe<Array<Scalars['String']>>;
  question?: Maybe<Scalars['String']>;
  requesterFullName: Scalars['String'];
  tel: Scalars['String'];
};

/** age selection options from 2x -> 6x */
export enum DocumentRequestAge {
  Over_20 = 'OVER_20',
  Over_30 = 'OVER_30',
  Over_40 = 'OVER_40',
  Over_50 = 'OVER_50',
  Over_60 = 'OVER_60'
}

export enum DocumentType {
  WebPamphlet = 'WEB_PAMPHLET'
}

export type FilterInput = {
  /** set it to true if this field is a reference to another type */
  isRef?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  value: Scalars['String'];
};

/** where do you know this homepage? */
export enum MarketingChannel {
  Facebook = 'FACEBOOK',
  FreePaper = 'FREE_PAPER',
  Friend = 'FRIEND',
  HousingMagazine = 'HOUSING_MAGAZINE',
  Instagram = 'INSTAGRAM',
  Model = 'MODEL',
  Other = 'OTHER',
  RadioCm = 'RADIO_CM',
  SiteOfConstructions = 'SITE_OF_CONSTRUCTIONS',
  Tvcm = 'TVCM',
  Website = 'WEBSITE',
  Youtube = 'YOUTUBE'
}

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

export type MaterialImage = {
  __typename?: 'MaterialImage';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  previewImageUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MaterialType = {
  __typename?: 'MaterialType';
  code3d?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  material?: Maybe<Material>;
  materialImage?: Maybe<MaterialImage>;
  price?: Maybe<Price>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Active user */
  activeUser: User;
  /** Change current user password */
  changePassword: Scalars['Boolean'];
  /** Create new Admin */
  createAdmin: User;
  createAppointmentRequest: AppointmentRequest;
  createBusinessCustomer: BusinessCustomer;
  createContactRequest: ContactRequest;
  /** Create new Customer */
  createCustomer: User;
  createDocumentRequest: DocumentRequest;
  /** Create new Material */
  createMaterial: Material;
  /** Create new image */
  createMaterialImage: MaterialImage;
  /** Create new Material Type */
  createMaterialType: MaterialType;
  createRequest: Request;
  createSimulationComponent: SimulationComponent;
  /** Create new style */
  createStyle: Style;
  /** Create new image */
  createStylesImage: StyleImage;
  createTheme: Theme;
  createThemeCategory: ThemeCategory;
  createThemeImage: ThemeImage;
  loginAdmin: Auth;
  loginCustomer: Auth;
  previewQuotation?: Maybe<Quotation>;
  removeAppointmentRequest: AppointmentRequest;
  removeBusinessCustomer: BusinessCustomer;
  removeContactRequest: ContactRequest;
  removeDocumentRequest: DocumentRequest;
  /** find one material and remove */
  removeMaterial: Material;
  /** find one and remove material type */
  removeMaterialType: MaterialType;
  removeRequest: Request;
  removeSimulation: Simulation;
  removeSimulationComponent: SimulationComponent;
  removeStyle: Style;
  removeTheme: Theme;
  removeThemeCategory: ThemeCategory;
  removeThemeImage: ThemeImage;
  /** Remove user by id */
  removeUser: User;
  /** Send a reset password request */
  requestResetPassword: Scalars['Boolean'];
  /** Re-send email active user */
  requestSendActivationEmail: Scalars['Boolean'];
  /** Send a forgot password request */
  sendForgotPasswordRequest: Scalars['Boolean'];
  submitDraftSimulation: Simulation;
  submitSimulation: Simulation;
  updateAppointmentRequest: AppointmentRequest;
  updateBusinessCustomer: BusinessCustomer;
  updateContactRequestStatus: ContactRequest;
  updateDocumentRequest: DocumentRequest;
  /** find one material and update */
  updateMaterial: Material;
  /** find one material type and update */
  updateMaterialType: MaterialType;
  /** Update user profile by current user */
  updateProfile: User;
  updateRequestStatus: Request;
  updateSimulationComponent: SimulationComponent;
  updateStyle: Style;
  updateTheme: Theme;
  updateThemeCategory: ThemeCategory;
  updateThemeImage: ThemeImage;
  /** Update user by id */
  updateUser: User;
};


export type MutationActiveUserArgs = {
  token: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationCreateAdminArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateAppointmentRequestArgs = {
  createAppointmentRequest: CreateAppointmentRequestInput;
};


export type MutationCreateBusinessCustomerArgs = {
  createBusinessCustomer: CreateBusinessCustomerInput;
};


export type MutationCreateContactRequestArgs = {
  createContactRequest: CreateContactRequestInput;
};


export type MutationCreateCustomerArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateDocumentRequestArgs = {
  createDocumentRequest: CreateDocumentRequestInput;
};


export type MutationCreateMaterialArgs = {
  createMaterialInput: CreateMaterialInput;
};


export type MutationCreateMaterialImageArgs = {
  createMaterialImageInput: CreateMaterialImageInput;
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


export type MutationCreateStylesImageArgs = {
  createStyleImageInput: CreateStyleImageInput;
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


export type MutationRemoveAppointmentRequestArgs = {
  id: Scalars['String'];
};


export type MutationRemoveBusinessCustomerArgs = {
  id: Scalars['String'];
};


export type MutationRemoveContactRequestArgs = {
  id: Scalars['String'];
};


export type MutationRemoveDocumentRequestArgs = {
  id: Scalars['String'];
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


export type MutationRequestResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationRequestSendActivationEmailArgs = {
  token: Scalars['String'];
};


export type MutationSendForgotPasswordRequestArgs = {
  email: Scalars['String'];
};


export type MutationSubmitDraftSimulationArgs = {
  submitDraftSimulationInput: SubmitDraftSimulationInput;
};


export type MutationSubmitSimulationArgs = {
  submitSimulationInput: SubmitSimulationInput;
};


export type MutationUpdateAppointmentRequestArgs = {
  updateAppointmentRequestInput: UpdateAppointmentRequestInput;
};


export type MutationUpdateBusinessCustomerArgs = {
  updateBusinessCustomerInput: UpdateBusinessCustomerInput;
};


export type MutationUpdateContactRequestStatusArgs = {
  id: Scalars['String'];
  status: ContactRequestStatus;
};


export type MutationUpdateDocumentRequestArgs = {
  updateDocumentRequestInput: UpdateDocumentRequestInput;
};


export type MutationUpdateMaterialArgs = {
  updateMaterialInput: UpdateMaterialInput;
};


export type MutationUpdateMaterialTypeArgs = {
  updateMaterialType: UpdateMaterialTypeInput;
};


export type MutationUpdateProfileArgs = {
  updateUserInput: UpdateUserProfileInput;
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
  appointmentRequest: AppointmentRequest;
  appointmentRequests?: Maybe<Array<AppointmentRequest>>;
  businessCustomer: BusinessCustomer;
  businessCustomers?: Maybe<Array<BusinessCustomer>>;
  contactRequest: ContactRequest;
  contactRequests?: Maybe<Array<ContactRequest>>;
  count: Scalars['Int'];
  documentRequest: DocumentRequest;
  documentRequests?: Maybe<Array<DocumentRequest>>;
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
  request: Request;
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


export type QueryAppointmentRequestArgs = {
  id: Scalars['String'];
};


export type QueryAppointmentRequestsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QueryBusinessCustomerArgs = {
  id: Scalars['String'];
};


export type QueryBusinessCustomersArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QueryContactRequestArgs = {
  id: Scalars['String'];
};


export type QueryContactRequestsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};


export type QueryCountArgs = {
  type: SchemaType;
  where?: InputMaybe<WhereInput>;
};


export type QueryDocumentRequestArgs = {
  id: Scalars['String'];
};


export type QueryDocumentRequestsArgs = {
  pagination?: InputMaybe<PaginationInput>;
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
  content?: Maybe<Scalars['String']>;
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
  Done = 'DONE',
  Open = 'OPEN',
  Rejected = 'REJECTED'
}

export enum RequestType {
  Meeting = 'MEETING',
  Other = 'OTHER',
  SendDocument = 'SEND_DOCUMENT'
}

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Sysadmin = 'SYSADMIN'
}

export enum SchemaType {
  AppointmentRequest = 'AppointmentRequest',
  BusinessCustomer = 'BusinessCustomer',
  ContactRequest = 'ContactRequest',
  DocumentRequest = 'DocumentRequest',
  Material = 'Material',
  MaterialType = 'MaterialType',
  Price = 'Price',
  Quotation = 'Quotation',
  QuotationItem = 'QuotationItem',
  Request = 'Request',
  Simulation = 'Simulation',
  SimulationComponent = 'SimulationComponent',
  Style = 'Style',
  StyleImage = 'StyleImage',
  Theme = 'Theme',
  ThemeCategory = 'ThemeCategory',
  ThemeImage = 'ThemeImage',
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
  styleImage?: Maybe<StyleImage>;
  theme?: Maybe<Theme>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type StyleMaterialsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
};

export type StyleImage = {
  __typename?: 'StyleImage';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  previewImageUrl: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubmitDraftSimulationInput = {
  simulationComponent: CreateSimulationComponentInput;
};

export type SubmitSimulationInput = {
  createSimulationComponentInput?: InputMaybe<CreateSimulationComponentInput>;
  simulation: RefInput;
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
  diagramImage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  insidePreviewUrl?: Maybe<Scalars['String']>;
  outsidePreviewUrl?: Maybe<Scalars['String']>;
};

export type UpdateAppointmentRequestInput = {
  address?: InputMaybe<Scalars['String']>;
  appointmentDate1?: InputMaybe<Scalars['DateTime']>;
  appointmentDate2?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  furigana?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  question?: InputMaybe<Scalars['String']>;
  requesterFullName?: InputMaybe<Scalars['String']>;
  tel?: InputMaybe<Scalars['String']>;
};

export type UpdateBusinessCustomerInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  furiquana?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  questionContent?: InputMaybe<Scalars['String']>;
  questionTitle?: InputMaybe<Scalars['String']>;
  representative?: InputMaybe<Scalars['String']>;
};

export type UpdateDocumentRequestInput = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<DocumentRequestAge>;
  currentHouseType?: InputMaybe<CurrentHouseType>;
  desiredContactMethod?: InputMaybe<DesiredContactMethod>;
  desiredDeploymentTime?: InputMaybe<DesiredDeploymentTime>;
  documentType?: InputMaybe<DocumentType>;
  email?: InputMaybe<Scalars['String']>;
  furigana?: InputMaybe<Scalars['String']>;
  hasLand?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  marketingChannels?: InputMaybe<Array<MarketingChannel>>;
  question?: InputMaybe<Scalars['String']>;
  requesterFullName?: InputMaybe<Scalars['String']>;
  tel?: InputMaybe<Scalars['String']>;
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
  /** image url */
  previewImageUrl?: InputMaybe<Scalars['String']>;
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
  /** image url */
  previewImageUrl?: InputMaybe<Scalars['String']>;
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
  diagramImage?: InputMaybe<Scalars['String']>;
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
  postcode?: InputMaybe<Scalars['String']>;
};

export type UpdateUserProfileInput = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  /** First name in furigana */
  firstNameF?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** Last name in furigana */
  lastNameF?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
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
  postcode?: Maybe<Scalars['String']>;
  role: Role;
  status: UserStatus;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  NotActive = 'NOT_ACTIVE'
}

export type WhereInput = {
  filter?: InputMaybe<Array<FilterInput>>;
  sort?: InputMaybe<Array<SortInput>>;
};

export type IAppointmentRequest = { __typename: 'AppointmentRequest', createdAt?: any | null, updatedAt?: any | null, id: string, requesterFullName: string, furigana: string, address: string, tel: string, email: string, appointmentDate1?: any | null, appointmentDate2?: any | null, question?: string | null };

export type AuthFields = { __typename?: 'Auth', refreshToken?: string | null, accessToken?: string | null };

export type IBusinessCustomer = { __typename: 'BusinessCustomer', createdAt?: any | null, updatedAt?: any | null, id: string, companyName: string, representative: string, furiquana: string, email: string, questionTitle: string, questionContent: string };

export type IDocumentRequest = { __typename: 'DocumentRequest', id: string, documentType: DocumentType, requesterFullName: string, furigana: string, age?: DocumentRequestAge | null, address: string, tel: string, question?: string | null, email: string, desiredContactMethod?: DesiredContactMethod | null, currentHouseType?: CurrentHouseType | null, hasLand?: boolean | null, desiredDeploymentTime?: DesiredDeploymentTime | null, marketingChannels?: Array<string> | null };

export type IMaterial = { __typename?: 'Material', createdAt?: any | null, updatedAt?: any | null, id: string, title?: string | null, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null }> | null, style?: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } | null };

export type IMaterialType = { __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null };

export type IMaterialImage = { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null };

export type IPrice = { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType };

export type IQuotation = { __typename?: 'Quotation', createdAt?: any | null, updatedAt?: any | null, id: string, taxRate: number, amountNet: number, amountGross: number };

export type IRequest = { __typename?: 'Request', createdAt?: any | null, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content?: string | null, postcode: string, type: RequestType, status: RequestStatus, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null };

export type ISimulation = { __typename?: 'Simulation', createdAt?: any | null, updatedAt?: any | null, id: string, status: SimulationStatus, requests?: Array<{ __typename?: 'Request', createdAt?: any | null, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content?: string | null, postcode: string, type: RequestType, status: RequestStatus, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null }> | null, simulationComponent?: { __typename?: 'SimulationComponent', createdAt?: any | null, updatedAt?: any | null, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } | null, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null }> | null } | null, style?: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } | null, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null }> | null } | null, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null, quotation?: { __typename?: 'Quotation', createdAt?: any | null, updatedAt?: any | null, id: string, taxRate: number, amountNet: number, amountGross: number } | null };

export type ISimulationComponent = { __typename?: 'SimulationComponent', createdAt?: any | null, updatedAt?: any | null, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } | null, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null }> | null } | null, style?: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } | null, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null }> | null };

export type IStyle = { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null };

export type IStyleImage = { __typename?: 'StyleImage', id: string, previewImageUrl: string };

export type ITheme = { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } | null, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null }> | null };

export type IThemeImage = { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null };

export type IThemeCategory = { __typename?: 'ThemeCategory', id: string, title: string };

export type IUsersFields = { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null };

export type LoginAdminVariables = Exact<{
  loginInput: CreateAuthInput;
}>;


export type LoginAdmin = { __typename?: 'Mutation', loginAdmin: { __typename?: 'Auth', refreshToken?: string | null, accessToken?: string | null } };

export type MeVariables = Exact<{ [key: string]: never; }>;


export type Me = { __typename?: 'Query', me: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } };

export type RemoveSimulationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveSimulation = { __typename?: 'Mutation', removeSimulation: { __typename?: 'Simulation', createdAt?: any | null, updatedAt?: any | null, id: string, status: SimulationStatus } };

export type DetailSimulationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DetailSimulation = { __typename?: 'Query', simulation: { __typename?: 'Simulation', createdAt?: any | null, updatedAt?: any | null, id: string, status: SimulationStatus, requests?: Array<{ __typename?: 'Request', createdAt?: any | null, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content?: string | null, postcode: string, type: RequestType, status: RequestStatus, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null }> | null, simulationComponent?: { __typename?: 'SimulationComponent', createdAt?: any | null, updatedAt?: any | null, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } | null, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null }> | null } | null, style?: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } | null, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null }> | null } | null, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null, quotation?: { __typename?: 'Quotation', createdAt?: any | null, updatedAt?: any | null, id: string, taxRate: number, amountNet: number, amountGross: number } | null } };

export type GetListSimulationComponentsVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListSimulationComponents = { __typename?: 'Query', simulationComponents: Array<{ __typename?: 'SimulationComponent', createdAt?: any | null, updatedAt?: any | null, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } | null, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null }> | null } | null, style?: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } | null, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null }> | null }> };

export type GetListSimulationsVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListSimulations = { __typename?: 'Query', simulations: Array<{ __typename?: 'Simulation', createdAt?: any | null, updatedAt?: any | null, id: string, status: SimulationStatus, requests?: Array<{ __typename?: 'Request', createdAt?: any | null, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content?: string | null, postcode: string, type: RequestType, status: RequestStatus, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null }> | null, simulationComponent?: { __typename?: 'SimulationComponent', createdAt?: any | null, updatedAt?: any | null, id: string, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } | null, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null }> | null } | null, style?: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } | null, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null }> | null } | null, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null, quotation?: { __typename?: 'Quotation', createdAt?: any | null, updatedAt?: any | null, id: string, taxRate: number, amountNet: number, amountGross: number } | null }> };

export type CreateMaterialVariables = Exact<{
  createMaterialInput: CreateMaterialInput;
}>;


export type CreateMaterial = { __typename?: 'Mutation', createMaterial: { __typename?: 'Material', id: string, title?: string | null } };

export type RemoveMaterialVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveMaterial = { __typename?: 'Mutation', removeMaterial: { __typename?: 'Material', createdAt?: any | null, updatedAt?: any | null, id: string, title?: string | null, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null }> | null, style?: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } | null } };

export type UpdateMaterialVariables = Exact<{
  updateMaterialInput: UpdateMaterialInput;
}>;


export type UpdateMaterial = { __typename?: 'Mutation', updateMaterial: { __typename?: 'Material', createdAt?: any | null, updatedAt?: any | null, id: string, title?: string | null, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null }> | null, style?: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } | null } };

export type GetDetailMaterialVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDetailMaterial = { __typename?: 'Query', material: { __typename?: 'Material', createdAt?: any | null, updatedAt?: any | null, id: string, title?: string | null, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null }> | null, style?: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } | null } };

export type GetListMaterialsVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListMaterials = { __typename?: 'Query', materials?: Array<{ __typename?: 'Material', createdAt?: any | null, updatedAt?: any | null, id: string, title?: string | null, materialTypes?: Array<{ __typename?: 'MaterialType', createdAt?: any | null, id: string, title?: string | null, code3d?: string | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, materialImage?: { __typename?: 'MaterialImage', id: string, previewImageUrl?: string | null } | null }> | null, style?: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } | null }> | null };

export type GetTotalCountVariables = Exact<{
  type: SchemaType;
  where?: InputMaybe<WhereInput>;
}>;


export type GetTotalCount = { __typename?: 'Query', count: number };

export type RemoveRequestVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveRequest = { __typename?: 'Mutation', removeRequest: { __typename?: 'Request', createdAt?: any | null, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content?: string | null, postcode: string, type: RequestType, status: RequestStatus, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null } };

export type UpdateRequestStatusVariables = Exact<{
  status: RequestStatus;
  id: Scalars['String'];
}>;


export type UpdateRequestStatus = { __typename?: 'Mutation', updateRequestStatus: { __typename?: 'Request', createdAt?: any | null, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content?: string | null, postcode: string, type: RequestType, status: RequestStatus, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null } };

export type GetRequestVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetRequest = { __typename?: 'Query', request: { __typename?: 'Request', createdAt?: any | null, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content?: string | null, postcode: string, type: RequestType, status: RequestStatus, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null } };

export type GetListRequestVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
}>;


export type GetListRequest = { __typename?: 'Query', requests: Array<{ __typename?: 'Request', createdAt?: any | null, id: string, requesterFullName: string, furigana: string, address: string, phone: string, email: string, hasLand: boolean, content?: string | null, postcode: string, type: RequestType, status: RequestStatus, user?: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } | null }> };

export type CreateStyleVariables = Exact<{
  createStyleInput: CreateStyleInput;
}>;


export type CreateStyle = { __typename?: 'Mutation', createStyle: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } };

export type RemoveStyleVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveStyle = { __typename?: 'Mutation', removeStyle: { __typename?: 'Style', id: string } };

export type UpdateStyleVariables = Exact<{
  updateStyleInput: UpdateStyleInput;
}>;


export type UpdateStyle = { __typename?: 'Mutation', updateStyle: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } };

export type GetStyleVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetStyle = { __typename?: 'Query', style: { __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null } };

export type GetListStylesVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListStyles = { __typename?: 'Query', styles?: Array<{ __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null }> | null };

export type CreateThemeCategoryVariables = Exact<{
  createThemeCategoryInput: CreateThemeCategoryInput;
}>;


export type CreateThemeCategory = { __typename?: 'Mutation', createThemeCategory: { __typename?: 'ThemeCategory', id: string, title: string } };

export type CreateThemeVariables = Exact<{
  createThemeInput: CreateThemeInput;
}>;


export type CreateTheme = { __typename?: 'Mutation', createTheme: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } | null, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null }> | null } };

export type CreateThemeImageVariables = Exact<{
  createThemeImageInput: CreateThemeImageInput;
}>;


export type CreateThemeImage = { __typename?: 'Mutation', createThemeImage: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } };

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


export type UpdateThemeImage = { __typename?: 'Mutation', updateThemeImage: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } };

export type GetDetailThemeVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDetailTheme = { __typename?: 'Query', theme: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } | null, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null }> | null } };

export type GetListThemesVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereInput>;
}>;


export type GetListThemes = { __typename?: 'Query', themes?: Array<{ __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, themeImage?: { __typename?: 'ThemeImage', id: string, outsidePreviewUrl?: string | null, insidePreviewUrl?: string | null, diagramImage?: string | null } | null, themeCategories?: Array<{ __typename?: 'ThemeCategory', id: string, title: string }> | null, styles?: Array<{ __typename?: 'Style', id: string, title?: string | null, code3d?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, price?: { __typename?: 'Price', id: string, value: number, unit: CurrencyUnit, createdAt?: any | null, updatedAt?: any | null, refId: string, refType: RefType } | null, theme?: { __typename?: 'Theme', id: string, title: string, description?: string | null, code3D?: string | null, createdAt: any, updatedAt: any } | null, styleImage?: { __typename?: 'StyleImage', id: string, previewImageUrl: string } | null }> | null }> | null };

export type CreateCustomerVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateCustomer = { __typename?: 'Mutation', createCustomer: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } };

export type RemoveUserVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveUser = { __typename?: 'Mutation', removeUser: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } };

export type UpdateUserVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUser = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } };

export type GetUserVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUser = { __typename?: 'Query', user: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null } };

export type GetListUsersVariables = Exact<{
  where?: InputMaybe<WhereInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetListUsers = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null, firstNameF?: string | null, lastNameF?: string | null, address?: string | null, phone?: string | null, role: Role, status: UserStatus, postcode?: string | null }> };

export const IAppointmentRequest = gql`
    fragment IAppointmentRequest on AppointmentRequest {
  __typename
  createdAt
  updatedAt
  id
  requesterFullName
  furigana
  address
  tel
  email
  appointmentDate1
  appointmentDate2
  question
}
    `;
export const AuthFields = gql`
    fragment AuthFields on Auth {
  refreshToken
  accessToken
}
    `;
export const IBusinessCustomer = gql`
    fragment IBusinessCustomer on BusinessCustomer {
  __typename
  createdAt
  updatedAt
  id
  companyName
  representative
  furiquana
  email
  questionTitle
  questionContent
}
    `;
export const IDocumentRequest = gql`
    fragment IDocumentRequest on DocumentRequest {
  __typename
  id
  documentType
  requesterFullName
  furigana
  age
  address
  tel
  question
  email
  desiredContactMethod
  question
  currentHouseType
  hasLand
  desiredDeploymentTime
  marketingChannels
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
export const IMaterialImage = gql`
    fragment IMaterialImage on MaterialImage {
  id
  previewImageUrl
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
  materialImage {
    ...IMaterialImage
  }
}
    ${IPrice}
${IMaterialImage}`;
export const IStyleImage = gql`
    fragment IStyleImage on StyleImage {
  id
  previewImageUrl
}
    `;
export const IStyle = gql`
    fragment IStyle on Style {
  id
  title
  code3d
  description
  createdAt
  updatedAt
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
  styleImage {
    ...IStyleImage
  }
}
    ${IPrice}
${IStyleImage}`;
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
  status
  postcode
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
  status
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
  diagramImage
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
  amountNet
  amountGross
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
export const RemoveSimulationDocument = gql`
    mutation removeSimulation($id: String!) {
  removeSimulation(id: $id) {
    createdAt
    updatedAt
    id
    status
  }
}
    `;
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
export const RemoveRequestDocument = gql`
    mutation removeRequest($id: String!) {
  removeRequest(id: $id) {
    ...IRequest
  }
}
    ${IRequest}`;
export const UpdateRequestStatusDocument = gql`
    mutation updateRequestStatus($status: RequestStatus!, $id: String!) {
  updateRequestStatus(status: $status, id: $id) {
    ...IRequest
  }
}
    ${IRequest}`;
export const GetRequestDocument = gql`
    query getRequest($id: String!) {
  request(id: $id) {
    ...IRequest
  }
}
    ${IRequest}`;
export const GetListRequestDocument = gql`
    query getListRequest($pagination: PaginationInput, $where: WhereInput) {
  requests(pagination: $pagination, where: $where) {
    ...IRequest
  }
}
    ${IRequest}`;
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
    diagramImage
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
    diagramImage
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
    removeRequest(variables: RemoveRequestVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveRequest> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveRequest>(RemoveRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeRequest');
    },
    updateRequestStatus(variables: UpdateRequestStatusVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateRequestStatus> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateRequestStatus>(UpdateRequestStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateRequestStatus');
    },
    getRequest(variables: GetRequestVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRequest> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRequest>(GetRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRequest');
    },
    getListRequest(variables?: GetListRequestVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListRequest> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListRequest>(GetListRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListRequest');
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