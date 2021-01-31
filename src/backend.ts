import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master',
  cache: new InMemoryCache(),
});
/*
export const apolloClient = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

 */

export const QQ = gql`
  query GetRates {
    planets {
      name
    }
    starships {
      name
    }
    persons {
      name
      species {
        name
      }
    }
  }
`;

//https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master
export const SW_SEARCH_ENTITIES_QUERY = gql`
  query SW_SEARCH_ENTITIES_DATASET($filter: String!) {
    planets(where: { name_contains: $filter }) {
      name
    }
    starships(where: { name_contains: $filter }) {
      name
    }
    persons(where: { name_contains: $filter }) {
      name
      species {
        name
      }
    }
  }
`;

/*
* const httpLink = createHttpLink({
  uri: `https://${REACT_APP_GATEWAY_PATH}/hasura/query`,
});

const retryLink = new RetryLink({
  delay: {
    initial: 500,
    max: 10,
    jitter: true,
  },
});

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${await accessManager.getAccessToken()}`,
    },
  };
});

const errorLink = onError(({ networkError }) => {
  // @ts-ignore statusCode doesn't exist of Error, but exist on ServerError
  if (networkError && networkError?.statusCode === 401) {
    accessManager.invalidateToken();
  }
});

export const client = new ApolloClient({
  link: ApolloLink.from([retryLink, authLink, errorLink, httpLink]),
  cache,
  resolvers,
  typeDefs,
});
* */
/*
* export function useQuery<Data, Variables>(query: DocumentNode, ...params: any) {
  const { data, ...otherResults } = useApolloQuery<Data, Variables>(
    query,
    ...params,
  );

  return {
    data: data ? keysToCamel(data) : {},
    ...otherResults,
  };
}
* */
