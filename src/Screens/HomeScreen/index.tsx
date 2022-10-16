import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductItem from '../../components/ProductItem';
import {DataStore} from 'aws-amplify';

import {Product} from '../../models';
//import products from '../../data/products';

interface HomeScreenProps {
  searchValue: string;
}

const HomeScreen = ({searchValue}: HomeScreenProps) => {
  console.log('home screen props searchValue :', searchValue);

  /* create a peace of state to save fetched data on it products */
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    DataStore.query(Product).then(result => setProducts(result));
    //remove the console.log(and setdata in the state for display in the screen)
  }, []);

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
