import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShoppingStack from './ShoppingStack';
import HomeStack from './HomeStackNavigation';

import Feather from 'react-native-vector-icons/Feather';
import ProfileScreen from '../Screens/Profile';
import MoreScreen from '../Screens/MoreScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({_, focused}) => (
            <Feather
              name="home"
              size={25}
              color={focused ? '#e47911' : '#d1d113'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({_, focused}) => (
            <Feather
              name="user"
              size={25}
              color={focused ? '#e47911' : '#d1d113'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cartstack"
        component={ShoppingStack}
        options={{
          tabBarIcon: ({_, focused}) => (
            <Feather
              name="shopping-cart"
              size={25}
              color={focused ? '#e47911' : '#d1d113'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'More Details',
          tabBarIcon: ({_, focused}) => (
            <Feather
              name="align-justify"
              size={25}
              color={focused ? '#e47911' : '#d1d113'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
