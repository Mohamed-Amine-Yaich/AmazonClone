import React, {useState} from 'react';

import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';

const Stack = createStackNavigator();

import {View, SafeAreaView, TextInput, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const windowWidth = Dimensions.get('window').width;

interface SearchInputProps {
  searchValue: string;
  setSearchValue: () => void;
}

const SearchInput = ({searchValue, setSearchValue}: SearchInputProps) => (
  <View
    style={{
      backgroundColor: '#48a3c6',
      height: 60,
      borderRadius: 5,
      justifyContent: 'center',
      width: windowWidth - 30,
    }}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 7,
        borderRadius: 5,
        padding: 5,
      }}>
      <Feather name="search" size={25} color="black" />
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder=" search..."
        placeholderTextColor={'black'}
        style={{
          backgroundColor: 'white',
          color: 'black',
          alignSelf: 'stretch',
          flex: 1,
        }}
      />
      <Feather
        name="camera"
        size={25}
        color="black"
        style={{marginHorizontal: 5}}
      />
      <Feather
        name="mic"
        size={25}
        color="black"
        style={{marginHorizontal: 5}}
      />
    </View>
  </View>
);

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#48a3c6',
          height: 60,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerTitle() {
            return (
              <SearchInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            );
          },
          headerTitleStyle: {},
        }}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerTitle() {
            return <SearchInput />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
