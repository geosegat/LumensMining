import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AppText from '../AppText';

const CardBalanceAccount = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('BRL');

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => setSelectedCurrency('BRL')}>
          <AppText
            style={
              selectedCurrency === 'BRL' ? styles.selectedLink : styles.link
            }
            size="xlarge"
            color={selectedCurrency === 'BRL' ? '#fefffe' : '#a8a8a9'}
            variant="bold">
            BRL
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => setSelectedCurrency('BTC')}>
          <AppText
            style={
              selectedCurrency === 'BTC' ? styles.selectedLink : styles.link
            }
            size="xlarge"
            color={selectedCurrency === 'BTC' ? '#fefffe' : '#a8a8a9'}
            variant="bold">
            BTC
          </AppText>
        </TouchableOpacity>
      </View>

      <AppText
        style={{marginTop: 5}}
        size="xlarge"
        color="white"
        variant="semiBold">
        {selectedCurrency === 'BRL' ? 'R$ 41,520.23' : '0.99 BTC'}
      </AppText>
    </View>
  );
};

export default CardBalanceAccount;

const styles = StyleSheet.create({
  container: {
    padding: 15,

    borderRadius: 10,
    alignItems: 'center',
  },
  link: {
    textDecorationLine: 'none',
  },
  selectedLink: {
    textDecorationLine: 'underline',
  },
});
