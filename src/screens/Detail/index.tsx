import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';
import { DetailScreenProps } from '../../navigation';
import { SW_Entity } from '../../backend';
import { ListItem } from '../../components/ListItem';

const useDetailScreen = (item: SW_Entity) => {
  const details = useMemo(() => {
    switch (item.__typename) {
      case 'Person':
        return (
          <>
            <Text>costInCredits: {item.height}</Text>
          </>
        );
      case 'Planet':
        return (
          <>
            <Paragraph>costInCredits: {item.population}</Paragraph>
          </>
        );
      case 'Starship':
        return (
          <>
            <Text>costInCredits: {item.costInCredits}</Text>
          </>
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
