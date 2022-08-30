import {useNavigation} from '@react-navigation/native';
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

  const navigation = useNavigation();

  const onCheckout = () => {
    navigation.navigate('AdressScreen');
  };

  return (
    <View /* contentContainerStyle={styles.root} */>
      {/* sherchbar */}
      {/* subtotla and button*/}
      <StatusBar backgroundColor="#48a3c6" />
     

      {/* using reduce to accumulate value  */}
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotal}>
          Subtotal({products.length} items):{' '}
          <Text style={{color: '#e47911'}}>${totalPrice.toFixed(2)}</Text>
        </Text>
        <Button title="Proceed to checkout" onPress={onCheckout} />
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
