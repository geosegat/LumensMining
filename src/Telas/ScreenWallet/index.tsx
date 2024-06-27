import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';

const ScreenWallet: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#242c33'}}>
        <Text>ScreenWallet</Text>
      </View>
    </View>
  );
};

export default ScreenWallet;

const styles = StyleSheet.create({});
