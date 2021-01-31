import React from 'react';
import { Card } from 'react-native-paper';

interface ListItemProps {
  onPress?: () => void;
  children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ onPress, children }) => {
  return (
    <Card onPress={onPress}>
      <Card.Content>{children}</Card.Content>
    </Card>
  );
};
