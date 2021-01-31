import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master',
  cache: new InMemoryCache(),
});

export interface SW_Base {
  id: number;
  name: string;
  __typename: string;
}

export interface SW_Planet extends SW_Base {
  population: number;
}

export interface SW_Person extends SW_Base {
  height: number;
}

export interface SW_Starship extends SW_Base {
  costInCredits: number;
}

export type SW_Entity = SW_Planet | SW_Person | SW_Starship;

export const SW_SEARCH_ENTITIES_QUERY = gql`
  query SW_SEARCH_ENTITIES_DATASET($filter: String!) {
    planets(where: { name_contains: $filter }, orderBy: name_ASC) {
      id
      name
      population
      climate
      orbitalPeriod
      terrain
      gravity
      rotationPeriod
      surfaceWater
      diameter
      residents {
        id
        name
      }
      films {
        id
        title
        releaseDate
      }
    }
    starships(where: { name_contains: $filter }, orderBy: name_ASC) {
      id
      name
      costInCredits
      hyperdriveRating
      passengers
      cargoCapacity
      crew
      length
      manufacturer
      maxAtmospheringSpeed
      mglt
      consumables
      class
      films {
        id
        title
        releaseDate
      }
      pilots {
        id
        name
      }
    }
    persons(where: { name_contains: $filter }, orderBy: name_ASC) {
      id
      name
      height
      birthYear
      mass
      skinColor
      gender
      eyeColor
      hairColor
      homeworld {
        id
        name
      }
      species {
        id
        name
      }
      vehicles {
        id
        name
      }
      starships {
        id
        name
      }
      films {
        id
        title
        releaseDate
      }
    }
  }
`;
