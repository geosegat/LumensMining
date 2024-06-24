import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../AppText';

const CardMining = () => {
  const [teste, setTeste] = useState('');
  return (
    <View style={styles.container}>
      <Image
        source={require('../../svgs/pngConvert/bitcoinIcon.png')}
        style={{width: 30, height: 30}}
      />
      <AppText size="xlarge" variant="semiBold" color="white">
        Bitcoin
      </AppText>
      <AppText color="gray" size="large">
        R$420,20
      </AppText>
    </View>
  );
};

export default CardMining;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#1f1e1f',
    borderRadius: 10,
    elevation: 5,
  },
});
