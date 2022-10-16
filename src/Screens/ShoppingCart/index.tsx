import {useNavigation} from '@react-navigation/native';
import {Auth, DataStore} from 'aws-amplify';
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';

import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';

import Button from '../../components/Button';

import ShoppingCartItem from '../../components/ShoppingCartItem';

import {CartPoduct} from '../../models';
import styles from './styles';

const ShoppingCart = () => {
  const [cartProduct, setCartProduct] = useState<CartPoduct[]>([]);

  const navigation = useNavigation();

  const onCheckout = () => {
    navigation.navigate('AdressScreen');
  };

  //fetch cart of the user

  const fetchUserCartProducts = async () => {
    const authUser = await Auth.currentAuthenticatedUser();

    // Simple query
    const cardprod = await API.graphql({query: queries.listCartPoducts});

    setCartProduct(cardprod.data.listCartPoducts.items);
  };

  useEffect(() => {
    fetchUserCartProducts();
  }, []);
  //i dont have a prodcut fild in the CartProduct
  //for each cartProdcut i must query the product with the productID and and assign it to a product field

  console.log('finalcardproduct', cartProduct);

  useEffect(() => {
    /* subscribe to shpping card update (ex quantity of product) */
    const subscriptions = cartProduct.map(cp =>
      DataStore.observe(CartPoduct, cp.id).subscribe(msg => {
        /* console.log(msg.model, msg.opType, msg.element); */
        //setState take a function use the current state for safe access to the current state
        setCartProduct(cps =>
          cps.map(cp => {
            if (cp.id == msg.element.id) {
              return {...cp, ...msg.element};
            }
            return cp;
          }),
        );
      }),
    );

    return () => {
      subscriptions.forEach(sub => {
        sub.unsubscribe();
      });
    };
  }, [cartProduct]);

  const totalPrice = cartProduct.reduce((sum, cp) => {
    return sum + cp?.product?.price * cp.quantity;
  }, 0);

  return (
    <View style={styles.root}>
      {/* sherchbar */}
      {/* subtotla and button*/}
      <StatusBar backgroundColor="#48a3c6" />

      {/* using reduce to accumulate value  */}
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotal}>
          Subtotal({cartProduct.length} items):{' '}
          <Text style={{color: '#e47911'}}>${totalPrice.toFixed(2)}</Text>
        </Text>
        <Button title="Proceed to checkout" onPress={onCheckout} />
      </View>

      {/* flatlist that render shoppingcart Prodcuts */}
      <FlatList
        data={cartProduct}
        renderItem={({item}) => <ShoppingCartItem item={item} />}
      />
    </View>
  );
};

export default ShoppingCart;
