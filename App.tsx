/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/Screens/HomeScreen';
import ProductScreen from './src/Screens/ProductScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />

      {/*  <HomeScreen /> */}
      <ProductScreen />
    </SafeAreaView>
  );
};

export default App;
