import React from 'react';
import { ActivityIndicator, Button, FlatList, View, Text } from 'react-native';
import { Card, Paragraph, Searchbar, Title } from 'react-native-paper';
import { SearchScreenProps, useShowDetails } from '../../navigation';
import { useQuery } from '@apollo/client';
import { SW_Entity, SW_SEARCH_ENTITIES_QUERY } from '../../backend';

import { orderBy } from 'lodash';

export const SearchScreen: React.FC<SearchScreenProps> = ({}) => {
  const { showDetails } = useShowDetails();

  const [searchQuery, setSearchQuery] = React.useState('');

  const [data, setData] = React.useState([] as SW_Entity[]);

  const { loading, error, refetch } = useQuery(SW_SEARCH_ENTITIES_QUERY, {
    fetchPolicy: 'cache-and-network',

    variables: { filter: searchQuery.trim() },
    onCompleted: (res) => {
      const result = res.planets.concat(res.starships).concat(res.persons);
      //orderBy(result, ['name'], ['asc'])
      setData(result);
    },
  });

  if (error) {
    return (
      <Button
        title="Retry"
        onPress={() => {
          setSearchQuery('');
          refetch();
        }}
      />
    );
  }
  return (
    <FlatList
      keyboardShouldPersistTaps="always"
      ListHeaderComponent={
        <Searchbar
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Search"
          onChangeText={(value) => setSearchQuery(value)}
          value={searchQuery}
        />
      }
      ListEmptyComponent={() => {
        if (loading) {
          return <ActivityIndicator />;
        }
        return <Text>No result</Text>;
      }}
      data={data}
      renderItem={({ item }) => (
        <Card onPress={() => showDetails(item)}>
          <Card.Content>
            <Title>{item.name}</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
