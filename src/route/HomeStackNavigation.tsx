import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
