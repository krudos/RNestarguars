import React, { useCallback, useMemo } from 'react';
import { SW_Entity, SW_SEARCH_ENTITIES_QUERY } from '../../backend';
import { useShowDetails } from '../../navigation';
import { useQuery } from '@apollo/client';
import { ActivityIndicator, Text, View } from 'react-native';
import { ListItem } from '../../components/ListItem';
import { Paragraph, Title, Button } from 'react-native-paper';
import { useStyles } from '../../styles';

export const useSearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState([] as SW_Entity[]);
  const styles = useStyles();
  const { showDetails } = useShowDetails();

  const { loading, error, refetch } = useQuery(SW_SEARCH_ENTITIES_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: { filter: searchQuery.trim() },
    onCompleted: (res) => {
      const result = res.planets.concat(res.starships).concat(res.persons);
      setData(result);
    },
  });

  const retry = useCallback(() => {
    setSearchQuery('');
    refetch();
  }, [refetch, setSearchQuery]);

  const EmptyComponent = useMemo(() => {
    if (loading) {
      return (
        <View style={styles.centerVH}>
          <ActivityIndicator />
        </View>
      );
    }
    return <Text>No result</Text>;
  }, [styles, loading]);

  const SW_Item = ({ item }: { item: SW_Entity }) => (
    <ListItem>
      <Title>{item.name}</Title>
      <Paragraph>{item.__typename}</Paragraph>
      <Button
        icon="chevron-right"
        mode="contained"
        onPress={() => showDetails(item)}
        color={'red'}>
        Details
      </Button>
    </ListItem>
  );

  return {
    setSearchQuery,
    searchQuery,
    EmptyComponent,
    data,
    SW_Item,
    error,
    retry,
  };
};
