import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Anime = {
  __typename?: 'Anime';
  image: Scalars['String'];
  malId: Scalars['ID'];
};

export type AnimeDetails = {
  __typename?: 'AnimeDetails';
  image: Scalars['String'];
  malId: Scalars['ID'];
  synopsis: Scalars['String'];
  title: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnime: Scalars['Boolean'];
  createRecList: Scalars['Boolean'];
  deleteAnime: Scalars['Boolean'];
  login: LoginResponse;
  register: Scalars['Boolean'];
};


export type MutationAddAnimeArgs = {
  malId: Scalars['Float'];
  recListId: Scalars['String'];
};


export type MutationCreateRecListArgs = {
  title: Scalars['String'];
};


export type MutationDeleteAnimeArgs = {
  malId: Scalars['Float'];
  recListId: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  anime: Array<Anime>;
  animeById: AnimeDetails;
  me: User;
  recList: RecList;
  recLists: Array<RecList>;
  searchRecList: Array<RecList>;
  user: User;
  users: Array<User>;
};


export type QueryAnimeArgs = {
  page: Scalars['Float'];
};


export type QueryAnimeByIdArgs = {
  malId: Scalars['Float'];
};


export type QueryRecListArgs = {
  recListId: Scalars['String'];
};


export type QuerySearchRecListArgs = {
  title: Scalars['String'];
};


export type QueryUserArgs = {
  userId: Scalars['String'];
};

export type RecList = {
  __typename?: 'RecList';
  _id: Scalars['ID'];
  anime: Array<Anime>;
  createdBy: User;
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
};

export type AddAnimeMutationVariables = Exact<{
  malId: Scalars['Float'];
  recListId: Scalars['String'];
}>;


export type AddAnimeMutation = { __typename?: 'Mutation', addAnime: boolean };

export type AnimeByIdQueryVariables = Exact<{
  malId: Scalars['Float'];
}>;


export type AnimeByIdQuery = { __typename?: 'Query', animeById: { __typename?: 'AnimeDetails', malId: string, title: string, image: string, synopsis: string } };

export type CreateRecListMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateRecListMutation = { __typename?: 'Mutation', createRecList: boolean };

export type DeleteAnimeMutationVariables = Exact<{
  malId: Scalars['Float'];
  recListId: Scalars['String'];
}>;


export type DeleteAnimeMutation = { __typename?: 'Mutation', deleteAnime: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', _id: string } };

export type RecListQueryVariables = Exact<{
  recListId: Scalars['String'];
}>;


export type RecListQuery = { __typename?: 'Query', recList: { __typename?: 'RecList', _id: string, title: string, createdBy: { __typename?: 'User', _id: string, email: string }, anime: Array<{ __typename?: 'Anime', malId: string, image: string }> } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: boolean };

export type SearchRecListQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type SearchRecListQuery = { __typename?: 'Query', searchRecList: Array<{ __typename?: 'RecList', _id: string, title: string }> };


export const AddAnimeDocument = gql`
    mutation AddAnime($malId: Float!, $recListId: String!) {
  addAnime(malId: $malId, recListId: $recListId)
}
    `;
export type AddAnimeMutationFn = Apollo.MutationFunction<AddAnimeMutation, AddAnimeMutationVariables>;

/**
 * __useAddAnimeMutation__
 *
 * To run a mutation, you first call `useAddAnimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAnimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAnimeMutation, { data, loading, error }] = useAddAnimeMutation({
 *   variables: {
 *      malId: // value for 'malId'
 *      recListId: // value for 'recListId'
 *   },
 * });
 */
export function useAddAnimeMutation(baseOptions?: Apollo.MutationHookOptions<AddAnimeMutation, AddAnimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAnimeMutation, AddAnimeMutationVariables>(AddAnimeDocument, options);
      }
export type AddAnimeMutationHookResult = ReturnType<typeof useAddAnimeMutation>;
export type AddAnimeMutationResult = Apollo.MutationResult<AddAnimeMutation>;
export type AddAnimeMutationOptions = Apollo.BaseMutationOptions<AddAnimeMutation, AddAnimeMutationVariables>;
export const AnimeByIdDocument = gql`
    query AnimeById($malId: Float!) {
  animeById(malId: $malId) {
    malId
    title
    image
    synopsis
  }
}
    `;

/**
 * __useAnimeByIdQuery__
 *
 * To run a query within a React component, call `useAnimeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeByIdQuery({
 *   variables: {
 *      malId: // value for 'malId'
 *   },
 * });
 */
export function useAnimeByIdQuery(baseOptions: Apollo.QueryHookOptions<AnimeByIdQuery, AnimeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeByIdQuery, AnimeByIdQueryVariables>(AnimeByIdDocument, options);
      }
export function useAnimeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeByIdQuery, AnimeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeByIdQuery, AnimeByIdQueryVariables>(AnimeByIdDocument, options);
        }
export type AnimeByIdQueryHookResult = ReturnType<typeof useAnimeByIdQuery>;
export type AnimeByIdLazyQueryHookResult = ReturnType<typeof useAnimeByIdLazyQuery>;
export type AnimeByIdQueryResult = Apollo.QueryResult<AnimeByIdQuery, AnimeByIdQueryVariables>;
export const CreateRecListDocument = gql`
    mutation CreateRecList($title: String!) {
  createRecList(title: $title)
}
    `;
export type CreateRecListMutationFn = Apollo.MutationFunction<CreateRecListMutation, CreateRecListMutationVariables>;

/**
 * __useCreateRecListMutation__
 *
 * To run a mutation, you first call `useCreateRecListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecListMutation, { data, loading, error }] = useCreateRecListMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateRecListMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecListMutation, CreateRecListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecListMutation, CreateRecListMutationVariables>(CreateRecListDocument, options);
      }
export type CreateRecListMutationHookResult = ReturnType<typeof useCreateRecListMutation>;
export type CreateRecListMutationResult = Apollo.MutationResult<CreateRecListMutation>;
export type CreateRecListMutationOptions = Apollo.BaseMutationOptions<CreateRecListMutation, CreateRecListMutationVariables>;
export const DeleteAnimeDocument = gql`
    mutation DeleteAnime($malId: Float!, $recListId: String!) {
  deleteAnime(malId: $malId, recListId: $recListId)
}
    `;
export type DeleteAnimeMutationFn = Apollo.MutationFunction<DeleteAnimeMutation, DeleteAnimeMutationVariables>;

/**
 * __useDeleteAnimeMutation__
 *
 * To run a mutation, you first call `useDeleteAnimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnimeMutation, { data, loading, error }] = useDeleteAnimeMutation({
 *   variables: {
 *      malId: // value for 'malId'
 *      recListId: // value for 'recListId'
 *   },
 * });
 */
export function useDeleteAnimeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAnimeMutation, DeleteAnimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAnimeMutation, DeleteAnimeMutationVariables>(DeleteAnimeDocument, options);
      }
export type DeleteAnimeMutationHookResult = ReturnType<typeof useDeleteAnimeMutation>;
export type DeleteAnimeMutationResult = Apollo.MutationResult<DeleteAnimeMutation>;
export type DeleteAnimeMutationOptions = Apollo.BaseMutationOptions<DeleteAnimeMutation, DeleteAnimeMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    _id
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RecListDocument = gql`
    query RecList($recListId: String!) {
  recList(recListId: $recListId) {
    _id
    title
    createdBy {
      _id
      email
    }
    anime {
      malId
      image
    }
  }
}
    `;

/**
 * __useRecListQuery__
 *
 * To run a query within a React component, call `useRecListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecListQuery({
 *   variables: {
 *      recListId: // value for 'recListId'
 *   },
 * });
 */
export function useRecListQuery(baseOptions: Apollo.QueryHookOptions<RecListQuery, RecListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecListQuery, RecListQueryVariables>(RecListDocument, options);
      }
export function useRecListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecListQuery, RecListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecListQuery, RecListQueryVariables>(RecListDocument, options);
        }
export type RecListQueryHookResult = ReturnType<typeof useRecListQuery>;
export type RecListLazyQueryHookResult = ReturnType<typeof useRecListLazyQuery>;
export type RecListQueryResult = Apollo.QueryResult<RecListQuery, RecListQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SearchRecListDocument = gql`
    query SearchRecList($title: String!) {
  searchRecList(title: $title) {
    _id
    title
  }
}
    `;

/**
 * __useSearchRecListQuery__
 *
 * To run a query within a React component, call `useSearchRecListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRecListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRecListQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSearchRecListQuery(baseOptions: Apollo.QueryHookOptions<SearchRecListQuery, SearchRecListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRecListQuery, SearchRecListQueryVariables>(SearchRecListDocument, options);
      }
export function useSearchRecListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRecListQuery, SearchRecListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRecListQuery, SearchRecListQueryVariables>(SearchRecListDocument, options);
        }
export type SearchRecListQueryHookResult = ReturnType<typeof useSearchRecListQuery>;
export type SearchRecListLazyQueryHookResult = ReturnType<typeof useSearchRecListLazyQuery>;
export type SearchRecListQueryResult = Apollo.QueryResult<SearchRecListQuery, SearchRecListQueryVariables>;