import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';

import ButtonBack from '../../Componentes/ButtonBack';
import CardProfile from '../../Componentes/CardProfile';
import AppText from '../../Componentes/AppText';
import CardBalanceAccount from '../../Componentes/CardBalanceAccount';

const ScreenAccount: React.FC<NavigationProps> = ({navigation}) => {
  const onPressReturn = () => {
    navigation.navigate('ScreenInitial');
  };

  return (
    <View style={styles.container}>
      <ButtonBack onPressReturn={onPressReturn} />
      <CardProfile label="Fulano Assado Da Silva" />
      <CardBalanceAccount />
    </View>
  );
};

export default ScreenAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242c33',
    padding: 15,
  },
});
