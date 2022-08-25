import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
interface ButtonProps {
  title: string;
}

const Button = ({title}: ButtonProps) => {
  const handelButtonPress = () => {};
  return (
    <TouchableOpacity style={styles.button} onPress={handelButtonPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
