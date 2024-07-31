import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';
import ButtomImgLabel from '../ButtonImgLabel';

const CardBalanceCritpomoeda = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <CollectionSvgImg iconName="bitcoinImg" width={30} height={30} />
        <View style={{marginLeft: 15}}>
          <AppText size="huge" color="#fff">
            Bitcoin
          </AppText>
          <AppText size="xxlarge" color="#fff">
            0.0005158 btc
          </AppText>
        </View>
      </View>

      <ButtomImgLabel iconName="setting" label="Levantar" />
    </View>
  );
};

export default CardBalanceCritpomoeda;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#281748',
    padding: 10,
    borderWidth: 1,
    borderColor: '#53446d',
    borderRadius: 10,
  },
  containerImg: {width: 30, height: 30},
});
