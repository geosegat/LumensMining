import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/index';

const ScreenRegister: React.FC<NavigationProps> = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('ScreenInitial');
  };
  return (
    <View>
      <Text>ScreenRegister</Text>
      <Button title="voltar" onPress={onPress} />
    </View>
  );
};

export default ScreenRegister;

const styles = StyleSheet.create({});
