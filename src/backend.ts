import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master',
  cache: new InMemoryCache(),
});

export interface SW_Entity {
  id: number;
  name: string;
}

export const SW_SEARCH_ENTITIES_QUERY = gql`
  query SW_SEARCH_ENTITIES_DATASET($filter: String!) {
    planets(where: { name_contains: $filter }, orderBy: name_ASC) {
      id
      name
    }
    starships(where: { name_contains: $filter }, orderBy: name_ASC) {
      id
      name
    }
    persons(where: { name_contains: $filter }, orderBy: name_ASC) {
      id
      name
    }
  }
`;
