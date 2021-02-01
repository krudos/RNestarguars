/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { ListItem } from './ListItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <ListItem>
      <Text>details</Text>
    </ListItem>,
  );
});
