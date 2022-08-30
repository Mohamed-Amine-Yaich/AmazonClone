import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
interface ButtonProps {
  title: string;
  onPress: () => Void;
}

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
