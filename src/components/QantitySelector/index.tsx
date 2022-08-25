import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

interface QuantitselectorProps {
  quantity: number;
  updateQuantity: () => {};
}

const QuantitySelector = ({quantity, updateQuantity}: QuantitselectorProps) => {
  const minus = () => {
    updateQuantity(Math.max(0, quantity - 1));
  };

  const plus = () => {
    updateQuantity(quantity + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={minus}>
        <Text style={styles.button}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={plus}>
        <Text style={styles.button}>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
