import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    marginVertical: 5,
    overflow: 'hidden',
    borderRadius: 10,
  },
  row: {flexDirection: 'row'},
  Image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  productTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  Rating: {
    color: '#000',
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    margin: 2,
  },
  productPrice: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
});
export default styles;
