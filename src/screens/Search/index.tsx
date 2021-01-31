import React from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SearchScreenProps } from '../../navigation';
import { RetryComponent } from '../../components/Retry';
import { useSearchScreen } from './logic';

export const SearchScreen: React.FC<SearchScreenProps> = () => {
  const {
    setSearchQuery,
    searchQuery,
    EmptyComponent,
    data,
    SW_Item,
    error,
    retry,
  } = useSearchScreen();

  if (error) {
    return <RetryComponent onPress={retry} />;
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
      ListEmptyComponent={EmptyComponent}
      data={data}
      renderItem={SW_Item}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
