import React from 'react';
import { Text } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';
import { DetailScreenProps } from '../../navigation';
import { SW_Entity, SW_Person, SW_Planet, SW_Starship } from '../../backend';
import { ListItem } from '../../components/ListItem';

const useDetailScreen = (item: SW_Entity) => {
  const planet = item.__typename === 'Planet' ? (item as SW_Planet) : null;
  const person = item.__typename === 'Person' ? (item as SW_Person) : null;
  const starship =
    item.__typename === 'Starship' ? (item as SW_Starship) : null;

  return { planet, person, starship };
};
export const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { item } = route.params;
  const { planet, person, starship } = useDetailScreen(item);
  console.log('i', item);

  return (
    <ListItem>
      <Title>{item.name}</Title>
      {planet && <Paragraph>population: {planet.population}</Paragraph>}
      {person && <Text>height: {person.height}</Text>}
      {starship && starship.costInCredits && (
        <Text>costInCredits: {starship.costInCredits}</Text>
      )}
    </ListItem>
  );
};
