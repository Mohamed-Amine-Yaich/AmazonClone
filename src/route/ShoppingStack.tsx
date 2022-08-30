import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AdressScreen from '../Screens/AdressScreen';
import ShoppingCart from '../Screens/ShoppingCart';

const Stack = createStackNavigator();

const ShoppingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#48a3c6',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="CartScreen"
        component={ShoppingCart}
        options={{
          title: 'Shopping Cart',
        }}
      />
      <Stack.Screen
        name="AdressScreen"
        component={AdressScreen}
        options={{title: 'Adress'}}
      />
    </Stack.Navigator>
  );
};

export default ShoppingStack;
