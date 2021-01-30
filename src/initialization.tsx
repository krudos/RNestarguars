import React from 'react';
import {AppRegistry} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';

 

const Stack = createStackNavigator();

const   RootComponent =()=> {
    return (
        <NavigationContainer>
             <Stack.Navigator>
                 <Stack.Screen name= "App" component = { App } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


 AppRegistry.registerComponent('RNestarguars', () => RootComponent);
