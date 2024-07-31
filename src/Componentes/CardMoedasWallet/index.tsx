import {Image, ImageStyle, StyleProp, StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import ButtomImgLabel from '../ButtonImgLabel';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';

interface CardMoedasWallet {
  style?: StyleProp<ImageStyle>;
}

const CardMoedasWallet: React.FC<CardMoedasWallet> = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <CollectionSvgImg iconName="bitcoinImg" width={30} height={30} />
      <AppText size="huge" style={styles.saldo} color="white">
        Saldos
      </AppText>
      <ButtomImgLabel label="Moedas" iconName="setting" />
    </View>
  );
};

export default CardMoedasWallet;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  saldo: {flex: 1, marginLeft: 10},
  buttonMoedas: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#673ab7',
    padding: 10,
    borderRadius: 20,
  },
  marginTextMoedas: {marginLeft: 10},
});
