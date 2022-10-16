import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import QuantitySelector from '../QantitySelector';
import {CartPoduct} from '../../models';
import {DataStore} from 'aws-amplify';

//interface is how object look like
interface ProductItemProps {
  item: {
    option: String;
    id: String;
    quantity: number;
    product: {
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const ShoppingCartItem = ({item}: ProductItemProps) => {
  const {title, image, avgRating, ratings, price, oldPrice} = item.product;
  const {quantity, id} = item;

  const updatequantity = async newquantity => {
    const original = await DataStore.query(CartPoduct, id);
    await DataStore.save(
      CartPoduct.copyOf(original, updated => {
        updated.quantity = newquantity;
      }),
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.Image}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.productTitle} numberOfLines={3}>
            {title}
          </Text>
          <View style={styles.Rating}>
            {[0, 0, 0, 0, 0].map((el, idx) => (
              <FontAwesome
                key={idx}
                style={styles.star}
                name={
                  avgRating - idx > 1
                    ? 'star'
                    : avgRating - idx > 0
                    ? 'star-half-full'
                    : 'star-o'
                }
                size={18}
                color="#e47911"
              />
            ))}

            <Text style={{color: 'green', marginLeft: 5}}>{ratings}</Text>
          </View>

          <Text style={styles.productPrice}>
            from: {price} <Text style={styles.oldPrice}>${oldPrice}</Text>
          </Text>
        </View>
      </View>
      <QuantitySelector quantity={quantity} updateQuantity={updatequantity} />
    </View>
  );
};

export default ShoppingCartItem;
