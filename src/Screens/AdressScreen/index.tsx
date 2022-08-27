import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Feather from 'react-native-vector-icons/Feather';
const countryList = require('country-list');

import Button from '../../components/Button';
import InputComponent from '../../components/InputComponent';

import styles from './styles';

const AdressScreen = () => {
  const [fullName, setFullName] = useState('');
  const [errorName, setErrorName] = useState('');

  const [phoneNum, setPhoneNum] = useState(0);
  const [errorNumber, setErrorNumber] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');

  const [country, setCountry] = useState('');

  /* handel valid inputs  on end editing for validate the input when submit the input value */

  return (
    /*    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={10}> */
    <ScrollView contentContainerStyle={styles.root}>
      {/* header and header label */}
      <StatusBar backgroundColor="#48a3c6" />

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#48a3c6',
          alignItems: 'center',
          height: 40,
        }}>
        <Feather name="arrow-left" size={25} color="black" />
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
            Enter a shipping adress
          </Text>
        </View>
      </View>

      {/* country picker*/}

      {/* using a the  react native picker and js method to get all countries name  */}

      {/* !!!! style the picker */}
      <View
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          margin: 10,
        }}>
        <Picker
          style={{color: 'black'}}
          selectedValue={country}
          onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}>
          {countryList.getNames().map(item => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </View>

      {/* country picker  */}

      {/* input and label comonent */}
      <InputComponent
        label="Full name (First and Last name)"
        value={fullName}
        updateValue={setFullName}
        setError={setErrorName}
      />
      {!!errorName && (
        <Text style={{color: 'red', fontSize: 15, alignSelf: 'center'}}>
          {errorName}
        </Text>
      )}

      <InputComponent
        label="phone number"
        value={phoneNum}
        updateValue={setPhoneNum}
        setError={setErrorNumber}
      />

      {!!errorNumber && (
        <Text style={{color: 'red', fontSize: 15, alignSelf: 'center'}}>
          {errorNumber}
        </Text>
      )}

      <InputComponent label="Adress" value={adress} updateValue={setAdress} />

      <InputComponent label="city" value={city} updateValue={setCity} />

      <View style={{flexDirection: 'row'}}>
        <InputComponent label="state" rootStyle={{flex: 1}} />
        <InputComponent label="zip code" rootStyle={{flex: 1}} />
      </View>

      <Button title="Use this adress" />
    </ScrollView>
    /* </KeyboardAvoidingView> */
  );
};

export default AdressScreen;
