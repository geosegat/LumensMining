import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AppText from '../AppText';

interface CardBalanceAccountProps {
  balance: number; // O saldo será passado como prop obrigatória
}

const CardBalanceAccount: React.FC<CardBalanceAccountProps> = ({balance}) => {
  const [selectedCurrency, setSelectedCurrency] = useState('BRL');
  const [showBalance, setShowBalance] = useState(true);

  const convertBalance = () => {
    if (selectedCurrency === 'BTC') {
      // Supondo que o valor do Bitcoin em BRL seja constante
      const BITCOIN_VALOR = 367248.56;
      return (balance / BITCOIN_VALOR).toFixed(8); // Convertendo para BTC
    }
    return balance.toFixed(2); // Retornando saldo em BRL
  };

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
        {showBalance
          ? selectedCurrency === 'BRL'
            ? `R$ ${convertBalance()}`
            : `${convertBalance()} BTC`
          : '*****'}
      </AppText>

      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setShowBalance(!showBalance)}>
        <AppText size="large" color="black" variant="bold">
          {showBalance ? 'Ocultar Saldo' : 'Mostrar Saldo'}
        </AppText>
      </TouchableOpacity>
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
  toggleButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#a8a8a9',
    borderRadius: 5,
  },
});
