import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import AppText from '../../Componentes/AppText';
import CardMoedasWallet from '../../Componentes/CardMoedasWallet';
import CardBalanceCritpomoeda from '../../Componentes/CardBalanceCriptomoeda';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';

const ScreenWallet: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{height: 25}} />
      <CardMoedasWallet />
      <View style={{height: 25}} />
      <CardBalanceCritpomoeda />
    </View>
  );
};

export default ScreenWallet;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#1a1d1b', padding: 15},
});
