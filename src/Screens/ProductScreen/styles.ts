import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    color: '#000',
    fontSize: 16,
    padding: 10,
  },
  carouselImage: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },

  dotsContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  dot: {
    margin: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'darkgray',
    backgroundColor: 'lightgray',
    width: 10,
    height: 10,
  },

  picker: {
    borderColor: 'gray',
    borderwidth: 1,
    backgroundColor: 'lightgray',
  },

  priceContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  oldprice: {
    color: '#000',
    textDecorationLine: 'line-through',
  },

  dolarSign: {
    color: '#000',
  },
  price: {
    color: '#000',
    fontSize: 25,
  },
  description: {
    color: '#000',
    fontSize: 18,
    lineHeight: 25,
  },
  quantitySelector: {},
  buttons: {},
});

export default styles;
