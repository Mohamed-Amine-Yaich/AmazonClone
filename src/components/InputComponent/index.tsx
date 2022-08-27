import {Text, View, TextInput, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
interface InputProps {
  label: string;
  value: string;
  updateValue: () => Void;
  setError: () => Void;
  rootStyle?: {};
}

const InputComponent = ({
  label,
  value,
  updateValue,
  rootStyle,
  setError,
}: InputProps) => {
  const validate = value => {
    if (label === 'Full name (First and Last name)') {
      value.length < 4 || value.length > 10
        ? setError('your name is invalid')
        : setError('');
    } else if (label === 'phone number') {
      value.length < 8
        ? setError('your phone number is invalid')
        : setError('');
    }
  };

  return (
    <View
      style={[
        {
          alignItems: 'flex-start',
          margin: 10,
          height: 70,
        },
        rootStyle,
      ]}>
      <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
        {label}
      </Text>
      <TextInput
        onEndEditing={e => validate(e.nativeEvent.text)}
        placeholderTextColor={'black'}
        keyboardType={label === 'phone number' ? 'numeric' : 'default'}
       
        style={{
          backgroundColor: 'white',
          color: 'black',
          alignSelf: 'stretch',
          flex: 1,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          padding: 5,
        }}
        onChangeText={value => {
          updateValue(value);
          console.log(value);
        }}
        value={value}
      />
    </View>
  );
};

export default InputComponent;
