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
import {useNavigation} from '@react-navigation/native';

const countryList = require('country-list');

import Button from '../../components/Button';
import InputComponent from '../../components/InputComponent';
import styles from './styles';

import {API, Auth, DataStore} from 'aws-amplify';
import {CartPoduct, Order, OrderProduct} from '../../models';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import cart from '../../data/cart';

const AdressScreen = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [errorName, setErrorName] = useState('');

  const [phoneNum, setPhoneNum] = useState(0);
  const [errorNumber, setErrorNumber] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');

  const [country, setCountry] = useState('');

  /* handel valid inputs  on end editing for validate the input when submit the input value */

  const submit = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    console.log(authUser.attributes.sub);
    //create a new order
    const newOrder = await DataStore.save(
      new Order({
        userSub: authUser.attributes.sub,
        country,
        fullName,
        phoneNumber: parseInt(phoneNum),
        adress,
        city,
      }),
    );
    /*     console.log(country, adress, phoneNum, adress, city);
     */
    console.log('new order :', newOrder);
    //for each cartProd of the curent user make an orderProd object
    const response = await API.graphql({
      query: queries.listCartPoducts,
      variables: {userSub: authUser.attributes.sub},
    });

    /*     console.log(cardprod.data.listCartPoducts.items);
     */ // link order product with a product and an order (neworder)
    console.log('cartproducts :', response.data.listCartPoducts.items);

    let cps = response.data.listCartPoducts.items;
    const OrderProd = await Promise.all(
      cps.map(cp =>
        DataStore.save(
          new OrderProduct({
            option: cp.option,
            quantity: cp.quantity,
            PoductID: cp.ProductID,
            OrderID: newOrder.id,
          }),
        ),
      ),
    );
    console.log('orderProds :', OrderProd);

    //delete all cardProd of that secific user

    console.log('cartPrds before delete :', cps);

    const deleteRes = await Promise.all(
      cps.map(cp => {
        console.log(cp.id);
        return API.graphql({
          query: mutations.deleteCartPoduct,
          variables: {input: {id: cp.id, _version: cp._version}},
        });
      }),
    );

    console.log('deleteresponse', deleteRes);

    navigation.navigate('HomeScreen');
  };

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
      <InputComponent
        label="country"
        value={country}
        updateValue={setCountry}
      />
      <View style={{flexDirection: 'row'}}>
        <InputComponent label="state" rootStyle={{flex: 1}} />
        <InputComponent label="zip code" rootStyle={{flex: 1}} />
      </View>

      <Button title="Use this adress" onPress={submit} />
    </ScrollView>
    /* </KeyboardAvoidingView> */
  );
};

export default AdressScreen;
