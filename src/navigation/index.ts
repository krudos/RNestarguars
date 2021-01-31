import { StackScreenProps } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';
import { SW_Entity, SW_Planet } from '../backend';
type RootStackParamList = {
  SearchScreen: undefined;
  DetailScreen: { item: SW_Entity | SW_Planet };
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
    navigation.navigate('DetailScreen', { item: value });
  return { showDetails };
};
