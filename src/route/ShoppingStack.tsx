import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';


import AdressScreen from '../Screens/AdressScreen';
import ShoppingCart from '../Screens/ShoppingCart';

const Stack = createStackNavigator();

const ShoppingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="fav" component={ShoppingCart} />
      <Stack.Screen name="Product" component={AdressScreen} />
    </Stack.Navigator>
  );
};

export default ShoppingStack;
