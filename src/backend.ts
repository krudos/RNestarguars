import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master',
  cache: new InMemoryCache(),
});

export interface SW_Base {
  id: string;
  name: string;
}

export interface Film {
  id: string;
  title: string;
  releaseDate: string;
}

export interface SW_Planet {
  __typename: 'Planet';
  id: string;
  name: string;
  population: number;
  climate: string;
  orbitalPeriod: string;
  terrain: string;
  gravity: string;
  rotationPeriod: string;
  surfaceWater: string;
  diameter: string;
  residents: SW_Base[];
  films: Film[];
}

export interface SW_Starship {
  __typename: 'Starship';
  id: string;
  name: string;
  costInCredits: number;
  hyperdriveRating: string;
  passengers: string;
  cargoCapacity: string;
  crew: string;
  length: string;
  manufacturer: string;
  maxAtmospheringSpeed: string;
  mglt: string;
  consumables: string;
  class: string;
  films: Film[];
  pilots: SW_Base[];
}

export interface SW_Person {
  __typename: 'Person';
  id: string;
  name: string;
  height: number;
  birthYear: string;
  mass: string;
  skinColor: string;
  gender: string;
  eyeColor: string;
  hairColor: string;
  homeworld: SW_Base;
  species: SW_Base[];
  vehicles: SW_Base[];
  starships: SW_Base[];
  films: Film[];
}

export type SW_Entity = SW_Planet | SW_Starship | SW_Person;

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
