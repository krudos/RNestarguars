import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SearchScreenProps, useShowDetails } from '../../navigation';
import { useQuery } from '@apollo/client';
import { QQ, SW_SEARCH_ENTITIES_QUERY } from '../../backend';

export const SearchScreen: React.FC<SearchScreenProps> = ({}) => {
  const { showDetails } = useShowDetails();

  const [searchQuery, setSearchQuery] = React.useState('');

  const { loading, error, data, refetch } = useQuery(SW_SEARCH_ENTITIES_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: { filter: searchQuery },
  });

  //const { loading, error, data } = useQuery(QQ);

  console.log('data', data);
  //  if (loading) return 'Loading...';
  //   if (error) return `Error! ${error.message}`;
  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={(value) => setSearchQuery(value)}
        value={searchQuery}
      />
      <Text> hola</Text>
      <Button title="Go to Details" onPress={showDetails} />
    </View>
  );
};
//<FlatList data={} />;
