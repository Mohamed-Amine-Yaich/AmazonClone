import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import ProductItem from '../../components/ProductItem';

import products from '../../data/products';

interface HomeScreenProps {
  searchValue: string;
}

const HomeScreen = ({searchValue}: HomeScreenProps) => {
  console.log('home screen props searchValue :', searchValue);
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
