import React, { useCallback, useMemo } from 'react';
import { ScrollView } from 'react-native';
import { Button, Paragraph, Title } from 'react-native-paper';
import { DetailScreenProps } from '../../navigation';
import { Film, SW_Base, SW_Entity } from '../../backend';
import { ListItem } from '../../components/ListItem';

const RenderFilms = (films: Film[]) => {
  return films.length > 0 ? (
    <>
      <Paragraph>Films: </Paragraph>
      {films.map((arrayItem) => (
        <Paragraph key={arrayItem.id}>
          • {arrayItem.title} {arrayItem.releaseDate.substr(0, 4)}
        </Paragraph>
      ))}
    </>
  ) : null;
};

const RenderSW_Base = (title: string, baseArray: SW_Base[]) => {
  return baseArray.length > 0 ? (
    <>
      <Paragraph>{title}: </Paragraph>
      {baseArray.map((arrayItem) => (
        <Paragraph key={arrayItem.id}>• {arrayItem.name}</Paragraph>
      ))}
    </>
  ) : null;
};

const useDetailScreen = (item: SW_Entity) => {
  const details = useMemo(() => {
    switch (item.__typename) {
      case 'Planet':
        return (
          <ScrollView>
            {item.population && (
              <Paragraph>Population: {item.population}</Paragraph>
            )}
            {item.climate && <Paragraph>Climate: {item.climate}</Paragraph>}
            {item.orbitalPeriod && (
              <Paragraph>Orbital Period: {item.orbitalPeriod}</Paragraph>
            )}
            {item.terrain && <Paragraph>Terrain: {item.terrain}</Paragraph>}
            {item.gravity && <Paragraph>Gravity: {item.gravity}</Paragraph>}
            {item.rotationPeriod && (
              <Paragraph>Rotation Period: {item.rotationPeriod}</Paragraph>
            )}
            {item.surfaceWater && (
              <Paragraph>Water Surface: {item.surfaceWater}</Paragraph>
            )}
            {item.diameter && <Paragraph>Diameter: {item.diameter}</Paragraph>}
            {RenderSW_Base('Residents', item.residents)}
            {RenderFilms(item.films)}
          </ScrollView>
        );
      case 'Starship':
        return (
          <ScrollView>
            {item.costInCredits && (
              <Paragraph>Cost in credits: {item.costInCredits}</Paragraph>
            )}
            {item.hyperdriveRating && (
              <Paragraph>Hyperdrive Rating: {item.hyperdriveRating}</Paragraph>
            )}
            {item.passengers && (
              <Paragraph>Passengers capacity: {item.passengers}</Paragraph>
            )}
            {item.cargoCapacity && (
              <Paragraph>Cargo capacity: {item.cargoCapacity}</Paragraph>
            )}
            {item.crew && <Paragraph>Crew: {item.crew}</Paragraph>}
            {item.length && <Paragraph>Length: {item.length}</Paragraph>}
            {item.manufacturer && (
              <Paragraph>Manufacturer: {item.manufacturer}</Paragraph>
            )}
            {item.maxAtmospheringSpeed && (
              <Paragraph>
                Max Atmosphering Speed: {item.maxAtmospheringSpeed}
              </Paragraph>
            )}
            {item.mglt && <Paragraph>MGLT: {item.mglt}</Paragraph>}
            {item.consumables && (
              <Paragraph>Consumables: {item.consumables}</Paragraph>
            )}
            {item.class && <Paragraph>Class: {item.class}</Paragraph>}
            {RenderFilms(item.films)}
            {RenderSW_Base('Pilots', item.pilots)}
          </ScrollView>
        );
      case 'Person':
        return (
          <ScrollView>
            {item.height && <Paragraph>height: {item.height}</Paragraph>}
            {item.birthYear && (
              <Paragraph>Birth Year: {item.birthYear}</Paragraph>
            )}
            {item.mass && <Paragraph>Mass: {item.mass}</Paragraph>}
            {item.skinColor && (
              <Paragraph>Skin Color: {item.skinColor}</Paragraph>
            )}
            {item.gender && <Paragraph>Gender: {item.gender}</Paragraph>}
            {item.eyeColor && <Paragraph>Eye Color: {item.eyeColor}</Paragraph>}
            {item.hairColor && (
              <Paragraph>Hair Color: {item.hairColor}</Paragraph>
            )}
            {RenderSW_Base('Homeworld', [item.homeworld])}
            {RenderSW_Base('species', item.species)}
            {RenderSW_Base('vehicles', item.vehicles)}
            {RenderSW_Base('starships', item.starships)}
            {RenderFilms(item.films)}
          </ScrollView>
        );
    }
  }, [item]);

  return { details };
};
export const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { item } = route.params;
  const { details } = useDetailScreen(item);

  return (
    <ListItem>
      <Title>{item.name}</Title>
      {details}
    </ListItem>
  );
};
