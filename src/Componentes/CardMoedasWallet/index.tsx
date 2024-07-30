import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import SvgSettings from '../../svgs/settings.svg';

interface CardMoedasWallet {}

const CardMoedasWallet: React.FC<CardMoedasWallet> = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={require('../../svgs/pngConvert/bitcoinIcon.png')}
        style={{width: 30, height: 30}}
      />
      <AppText size="huge" style={{flex: 1, marginLeft: 10}} color="white">
        Saldos
      </AppText>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#673ab7',
          padding: 10,
          borderRadius: 20,
        }}>
        <SvgSettings width={24} height={24} color="#fff" />
        <AppText style={{marginLeft: 10}} color="#fff" variant="bold">
          Moedas
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default CardMoedasWallet;

const styles = StyleSheet.create({});
