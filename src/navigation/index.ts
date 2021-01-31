import { StackScreenProps } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { SW_Entity } from '../backend';
type RootStackParamList = {
  SearchScreen: undefined;
  DetailScreen: { item: SW_Entity };
};

export type SearchScreenProps = StackScreenProps<
  RootStackParamList,
  'SearchScreen'
>;

export type DetailScreenProps = StackScreenProps<
  RootStackParamList,
  'DetailScreen'
>;

export const useShowDetails = () => {
  const navigation = useNavigation();
  const showDetails = (value: SW_Entity) =>
    navigation.navigate('DetailScreen', { name: 'xx', item: value });
  return { showDetails };
};
