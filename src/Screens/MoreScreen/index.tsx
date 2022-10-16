import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {Auth} from 'aws-amplify';

const MoreScreen = () => {
  //const onlogout = () => {};

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{color: '#000'}}>
        <Button title="Logout" onPress={Auth.signOut} />
      </Text>
    </View>
  );
};

export default MoreScreen;
