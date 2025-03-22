import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type BasePayload = {
  isSuccess: Scalars['Boolean']['output'];
};

export type CreateUserInput = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserPayload = BasePayload & {
  __typename?: 'CreateUserPayload';
  isSuccess: Scalars['Boolean']['output'];
};

/** type */
export type Icon = {
  __typename?: 'Icon';
  fileName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: CreateUserPayload;
  signInWithGoogle: SignInWithGooglePayload;
  updateIcon: Icon;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationSignInWithGoogleArgs = {
  input: SignInWithGoogleInput;
};


export type MutationUpdateIconArgs = {
  input: UpdateIconInput;
};

export type Query = {
  __typename?: 'Query';
  getIcon: Icon;
  getIcons: Array<Icon>;
  getNowInJST: Scalars['Date']['output'];
  healthCheckForBackend: Scalars['String']['output'];
  users: Array<Maybe<User>>;
};

/** input */
export type SignInWithGoogleInput = {
  email: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** type */
export type SignInWithGooglePayload = {
  __typename?: 'SignInWithGooglePayload';
  token: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

/** input */
export type UpdateIconInput = {
  iconID: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  icon: Icon;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAdmin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type SignInWithGoogleMutationVariables = Exact<{
  input: SignInWithGoogleInput;
}>;


export type SignInWithGoogleMutation = { __typename?: 'Mutation', payload: { __typename?: 'SignInWithGooglePayload', username: string, token: string } };

export type GetNowInJstQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNowInJstQuery = { __typename?: 'Query', nowInJST: any };

export type HealthCheckForBackendQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthCheckForBackendQuery = { __typename?: 'Query', healthCheckForBackend: string };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  BasePayload: ( CreateUserPayload );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BasePayload: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BasePayload']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Icon: ResolverTypeWrapper<Icon>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SignInWithGoogleInput: SignInWithGoogleInput;
  SignInWithGooglePayload: ResolverTypeWrapper<SignInWithGooglePayload>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateIconInput: UpdateIconInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BasePayload: ResolversInterfaceTypes<ResolversParentTypes>['BasePayload'];
  Boolean: Scalars['Boolean']['output'];
  CreateUserInput: CreateUserInput;
  CreateUserPayload: CreateUserPayload;
  Date: Scalars['Date']['output'];
  ID: Scalars['ID']['output'];
  Icon: Icon;
  Mutation: {};
  Query: {};
  SignInWithGoogleInput: SignInWithGoogleInput;
  SignInWithGooglePayload: SignInWithGooglePayload;
  String: Scalars['String']['output'];
  UpdateIconInput: UpdateIconInput;
  User: User;
};

export type BasePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasePayload'] = ResolversParentTypes['BasePayload']> = {
  __resolveType: TypeResolveFn<'CreateUserPayload', ParentType, ContextType>;
  isSuccess: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = {
  isSuccess: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type IconResolvers<ContextType = any, ParentType extends ResolversParentTypes['Icon'] = ResolversParentTypes['Icon']> = {
  fileName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser: Resolver<ResolversTypes['CreateUserPayload'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  signInWithGoogle: Resolver<ResolversTypes['SignInWithGooglePayload'], ParentType, ContextType, RequireFields<MutationSignInWithGoogleArgs, 'input'>>;
  updateIcon: Resolver<ResolversTypes['Icon'], ParentType, ContextType, RequireFields<MutationUpdateIconArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getIcon: Resolver<ResolversTypes['Icon'], ParentType, ContextType>;
  getIcons: Resolver<Array<ResolversTypes['Icon']>, ParentType, ContextType>;
  getNowInJST: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  healthCheckForBackend: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  users: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
};

export type SignInWithGooglePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInWithGooglePayload'] = ResolversParentTypes['SignInWithGooglePayload']> = {
  token: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icon: Resolver<ResolversTypes['Icon'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isAdmin: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BasePayload: BasePayloadResolvers<ContextType>;
  CreateUserPayload: CreateUserPayloadResolvers<ContextType>;
  Date: GraphQLScalarType;
  Icon: IconResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  SignInWithGooglePayload: SignInWithGooglePayloadResolvers<ContextType>;
  User: UserResolvers<ContextType>;
};



export const SignInWithGoogleDocument = gql`
    mutation SignInWithGoogle($input: SignInWithGoogleInput!) {
  payload: signInWithGoogle(input: $input) {
    username
    token
  }
}
    `;
export const GetNowInJstDocument = gql`
    query GetNowInJst {
  nowInJST: getNowInJST
}
    `;
export const HealthCheckForBackendDocument = gql`
    query HealthCheckForBackend {
  healthCheckForBackend
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    SignInWithGoogle(variables: SignInWithGoogleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SignInWithGoogleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignInWithGoogleMutation>(SignInWithGoogleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SignInWithGoogle', 'mutation', variables);
    },
    GetNowInJst(variables?: GetNowInJstQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNowInJstQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNowInJstQuery>(GetNowInJstDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNowInJst', 'query', variables);
    },
    HealthCheckForBackend(variables?: HealthCheckForBackendQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<HealthCheckForBackendQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HealthCheckForBackendQuery>(HealthCheckForBackendDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HealthCheckForBackend', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;