import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShoppingStack from './ShoppingStack';
import HomeStack from './HomeStackNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="cart" component={ShoppingStack} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
