import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';
import ButtomImgLabel from '../ButtonImgLabel';

interface CardBalanceCritpomoeda {
  iconName?: string;
  moeda?: string;
  balance?: number;
  criptoSigla?: string;
}

const CardBalanceCritpomoeda: React.FC<CardBalanceCritpomoeda> = ({
  iconName,
  moeda,
  balance,
  criptoSigla,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <CollectionSvgImg
          isDisabled
          iconName={iconName ?? ''}
          width={45}
          height={45}
        />
        <View style={{marginLeft: 15}}>
          <AppText size="xhuge" color="#fff">
            {moeda}
          </AppText>
          <AppText size="xxxlarge" color="#fff">
            {balance} {criptoSigla}
          </AppText>
        </View>
      </View>
      <View style={styles.containerButtomClaim}>
        <ButtomImgLabel iconName="claim" label="Retirar fundos" />
      </View>
    </View>
  );
};

export default CardBalanceCritpomoeda;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002c53',
    padding: 10,
    borderWidth: 1,
    borderColor: '#0874a5',
    borderRadius: 10,
  },
  containerImg: {width: 30, height: 30},
  containerButtomClaim: {alignItems: 'flex-end', marginTop: 20},
});
