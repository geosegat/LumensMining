import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import AppText from '../../Componentes/AppText';
import CardMoedasWallet from '../../Componentes/CardMoedasWallet';

const ScreenWallet: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#1a1d1b', padding: 15}}>
      <CardMoedasWallet />
    </View>
  );
};

export default ScreenWallet;

const styles = StyleSheet.create({});
