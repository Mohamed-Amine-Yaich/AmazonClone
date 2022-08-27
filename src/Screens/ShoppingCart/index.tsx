import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';
import ProductItem from '../../components/ProductItem';

import ShoppingCartItem from '../../components/ShoppingCartItem';
import products from '../../data/cart';
import styles from './styles';

const ShoppingCart = () => {
  const totalPrice = products.reduce((sum, item) => {
    return sum + item.item.price;
  }, 0);

  return (
    <View /* contentContainerStyle={styles.root} */>
      {/* sherchbar */}
      {/* subtotla and button*/}
      <StatusBar backgroundColor="#48a3c6" />
      <SafeAreaView
        style={{
          backgroundColor: '#48a3c6',
          height: 60,
          borderRadius: 5,
          justifyContent: 'center',
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
      </SafeAreaView>

      {/* using reduce to accumulate value  */}
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotal}>
          Subtotal({products.length} items):{' '}
          <Text style={{color: '#e47911'}}>${totalPrice.toFixed(2)}</Text>
        </Text>
        <Button title="Proceed to checkout" />
      </View>

      {/* flatlist that render shoppingcart Prodcuts */}
      <FlatList
        data={products}
        renderItem={({item}) => <ShoppingCartItem item={item} />}
      />
    </View>
  );
};

export default ShoppingCart;
