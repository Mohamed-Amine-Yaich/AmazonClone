import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

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

  const navigation = useNavigation();

  const handelItemPress = () => {
    navigation.navigate('ProductScreen', {id: item.id});
  };

  return (
    <Pressable onPress={handelItemPress} style={styles.root}>
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
          from: {price.toFixed(2)}{' '}
          <Text style={styles.oldPrice}>${oldPrice?.toFixed(2)}</Text>
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
