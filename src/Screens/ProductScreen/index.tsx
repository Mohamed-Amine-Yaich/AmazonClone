import {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import {Picker} from '@react-native-picker/picker';

import styles from './styles';
/* replace this Product for the data with a Product from dataStore */
//import product from '../../data/product';
import QuantitySelector from '../../components/QantitySelector';
import Button from '../../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';

import {Auth, DataStore} from 'aws-amplify';

import {Product, CartPoduct} from '../../models';

const ProductScreen = () => {
  const {width} = useWindowDimensions();
  const [imgIndex, setImgIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(product?.options[0]);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product>(null);

  const route = useRoute();
  const navigation = useNavigation();
  //  console.log('product id:', route.params.id);

  /* onviewableItem change take a function
  when the page render every time a new function is created and assayned to this flatlist prop
that what makes the error :changiing onviewable itemchanged on the fly is not supported
  for not having this issue we use use callback hooks for not creating new function but memorizing the function

   */

  const onViewableItemsChanged = useCallback(
    ({viewableItems /* , changed */}) => {
      /*   console.log('Visible items are', viewableItems);
    console.log('Changed in this iteration', changed); */
      if (viewableItems.length > 0) {
        setImgIndex(viewableItems[0]?.index || 0);
      }
    },
    [],
  );
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  useEffect(() => {
    if (!route.params.id) {
      return;
    }
    DataStore.query(Product, route.params?.id).then(result => {
      setProduct(result);
      console.log('result by id :', result);
    });
  }, [route.params.id]);

  const addTochart = async () => {
    //creation of a cartProduct
    const authUser = await Auth.currentAuthenticatedUser();

    if (!product || !authUser) {
      return;
    }

    const newcartProd = new CartPoduct({
      userSub: authUser.attributes.sub,
      quantity,
      option: selectedOption,
      ProductID: product.id,
    });
    const CreatingcartProdRes = await DataStore.save(newcartProd);
    console.log('creating cartProd response ', CreatingcartProdRes);
    navigation.navigate('ShoppingStack');
  };

  if (!product) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView contentContainerStyle={styles.root}>
      {/* product title */}
      <Text style={styles.root}>{product.title}</Text>

      {/* image carousel */}

      <FlatList
        data={product.images}
        renderItem={({item}) => (
          <Image
            style={[
              styles.carouselImage,
              {width: width - 20},
            ]} /* width and the margin must be equatl to the snap interval for rendring the image in the center */
            source={{uri: item}}
          />
        )}
        horizontal
        snapToInterval={
          width
        } /* specify the width of each item on the flatlist*/
        snapToAlignment={
          'center'
        } /* the alignment of the item in specified width 'start ,center,end' */
        decelerationRate={
          'normal'
        } /* how fast is the transition from one image to another */
        showsHorizontalScrollIndicator={false}
        /*     keep trak of the index of the element in a flatlist */
        /* if 50% of the item is visible then we can say it is the visible one */
        viewabilityConfig={viewConfigRef.current}
        // itemVisiblePercentThreshold: 50
        /* the item is visible when 50 percent of him is visible */
        //viewAreaCoveragePercentThreshold: 50,
        /* the item is visible when he take 50% of the area  */

        /* calback that called when a new  item is changing to be visible  in the screen keep track of the item that is shown in screen  */
        onViewableItemsChanged={onViewableItemsChanged}
      />

      {/* dots */}
      <View style={styles.dotsContainer}>
        {product.images.map((dot, dotIndex) => (
          <View
            key={dotIndex}
            style={[
              styles.dot,
              {
                backgroundColor:
                  dotIndex == imgIndex ? 'darkgray' : 'lightgray',
              },
            ]}
          />
        ))}
      </View>

      {/*option selector  */}
      {product.options && (
        <Picker
          style={styles.picker}
          selectedValue={selectedOption}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedOption(itemValue)
          }>
          {product.options.map(item => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      )}
      {/* price */}
      <View style={styles.priceContainer}>
        <Text style={[styles.dolarSign]}>$</Text>
        <Text style={styles.price}>{product.price.toFixed(2)}</Text>
        <Text style={styles.oldprice}> {product.oldPrice?.toFixed(2)}</Text>
      </View>

      {/* description */}

      <Text style={styles.description}>{product.description}</Text>

      {/* quantity selector two buton component */}
      <QuantitySelector quantity={quantity} updateQuantity={setQuantity} />
      {/* button component */}
      <Button title={'Add to cart'} onPress={addTochart} />
      <Button title={'buy now'} />
    </ScrollView>
  );
};

export default ProductScreen;
