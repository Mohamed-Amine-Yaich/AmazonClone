import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

//interface is how object look like
interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const {title, image, avgRating, ratings, price, oldPrice} = item;

  return (
    <View style={styles.root}>
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
  );
};

export default ProductItem;
