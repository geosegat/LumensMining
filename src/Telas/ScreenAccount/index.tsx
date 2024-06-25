import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import ButtonBack from '../../Componentes/ButtonBack';
import CardProfile from '../../Componentes/CardProfile';
import CardBalanceAccount from '../../Componentes/CardBalanceAccount';
import CardMining from '../../Componentes/CardMining';

const ScreenAccount: React.FC<NavigationProps> = ({navigation}) => {
  const onPressReturn = () => {
    navigation.navigate('ScreenInitial');
  };

  return (
    <View style={styles.container}>
      <ButtonBack onPressReturn={onPressReturn} />
      <CardProfile label="Fulano Assado Da Silva" />
      <CardBalanceAccount />
      <ScrollView
        style={{
          backgroundColor: '#1a1d1b',
          flex: 1,
          padding: 15,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: 20,
        }}>
        <CardMining />
        <CardMining />
        <CardMining />
        <CardMining />
        <CardMining />
        <CardMining />
      </ScrollView>
    </View>
  );
};

export default ScreenAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242c33',
  },
});
