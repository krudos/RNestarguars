import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { DetailScreenProps } from '../../navigation';

export const DetailScreen: React.FC<DetailScreenProps> = ({
  route,
  navigation,
}) => {
  const { item } = route.params;

  useEffect(
    () => navigation.setOptions({ title: item.name, headerBackTitle: 'Back' }),
    [navigation, item],
  );
  return (
    <View>
      <Text> {item.name}</Text>
    </View>
  );
};
