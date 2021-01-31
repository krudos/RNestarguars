import { Button, Text, View } from 'react-native';
import React from 'react';
import { useStyles } from '../styles';
interface Props {
  onPress: () => void;
}
export const RetryComponent: React.FC<Props> = ({ onPress }) => {
  const styles = useStyles();
  return (
    <View style={styles.centerVH}>
      <Text>Error loading data</Text>
      <Button title="Retry" onPress={onPress} />
    </View>
  );
};
