import type { GraphQLResolveInfo } from 'graphql';
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
};

export type BasePayload = {
  isSuccess: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signInWithGoogle: SignInWithGooglePayload;
};


export type MutationSignInWithGoogleArgs = {
  input: SignInWithGoogleInput;
};

export type Query = {
  __typename?: 'Query';
  helloBackend: Scalars['String']['output'];
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

export type SignInWithGoogleMutationVariables = Exact<{
  input: SignInWithGoogleInput;
}>;


export type SignInWithGoogleMutation = { __typename?: 'Mutation', payload: { __typename?: 'SignInWithGooglePayload', username: string, token: string } };



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
  BasePayload: never;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BasePayload: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BasePayload']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SignInWithGoogleInput: SignInWithGoogleInput;
  SignInWithGooglePayload: ResolverTypeWrapper<SignInWithGooglePayload>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BasePayload: ResolversInterfaceTypes<ResolversParentTypes>['BasePayload'];
  Boolean: Scalars['Boolean']['output'];
  Mutation: {};
  Query: {};
  SignInWithGoogleInput: SignInWithGoogleInput;
  SignInWithGooglePayload: SignInWithGooglePayload;
  String: Scalars['String']['output'];
};

export type BasePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasePayload'] = ResolversParentTypes['BasePayload']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  isSuccess: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  signInWithGoogle: Resolver<ResolversTypes['SignInWithGooglePayload'], ParentType, ContextType, RequireFields<MutationSignInWithGoogleArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  helloBackend: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type SignInWithGooglePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInWithGooglePayload'] = ResolversParentTypes['SignInWithGooglePayload']> = {
  token: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BasePayload: BasePayloadResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  SignInWithGooglePayload: SignInWithGooglePayloadResolvers<ContextType>;
};



export const SignInWithGoogleDocument = gql`
    mutation SignInWithGoogle($input: SignInWithGoogleInput!) {
  payload: signInWithGoogle(input: $input) {
    username
    token
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    SignInWithGoogle(variables: SignInWithGoogleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SignInWithGoogleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignInWithGoogleMutation>(SignInWithGoogleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SignInWithGoogle', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;