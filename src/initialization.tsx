import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from './screens/Search';
import { DetailScreen } from './screens/Detail';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './backend';

import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

const RootComponent = () => {
  return (
    <PaperProvider>
      <ApolloProvider client={apolloClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SearchScreen">
            <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={{ title: 'Home' }}
            />
            <Stack.Screen
              name="DetailScreen"
              component={DetailScreen}
              options={{ title: 'Details' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </PaperProvider>
  );
};

AppRegistry.registerComponent('RNestarguars', () => RootComponent);
