import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';

const ScreenAccountSettings: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#1a1d1b'}}>
        <Text>ScreenAccountSettings</Text>
      </View>
    </View>
  );
};

export default ScreenAccountSettings;

const styles = StyleSheet.create({});
