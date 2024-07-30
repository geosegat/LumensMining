import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';

const ScreenTransactions: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#1a1d1b'}}>
        <Text>ScreenTransactions</Text>
      </View>
    </View>
  );
};

export default ScreenTransactions;

const styles = StyleSheet.create({});
