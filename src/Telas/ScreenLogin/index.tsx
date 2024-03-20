import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/index';

const ScreenLogin: React.FC<NavigationProps> = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('ScreenRegister');
  };
  return (
    <View>
      <Text>ScreenLogin</Text>
      <Button title="next page" onPress={onPress} />
    </View>
  );
};

export default ScreenLogin;

const styles = StyleSheet.create({});
