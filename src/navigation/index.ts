import { StackScreenProps } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
type RootStackParamList = {
  SearchScreen: undefined;
  DetailScreen: { userId: string };
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
  const showDetails = useCallback(() => navigation.navigate('DetailScreen'), [
    navigation,
  ]);
  return { showDetails };
};
