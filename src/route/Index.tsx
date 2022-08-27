import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="app" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
