import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';

const CardBalanceAccount = () => {
  return (
    <View style={styles.container}>
      <AppText size="xlarge" color="white" variant="semiBold">
        Balance
      </AppText>
      <AppText size="xlarge" color="white" variant="semiBold">
        R$: 2.624,52
      </AppText>
    </View>
  );
};

export default CardBalanceAccount;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#114aa0',
    borderRadius: 10,
    alignItems: 'center',
  },
});
