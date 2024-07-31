import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import AppText from '../../Componentes/AppText';
import CardMoedasWallet from '../../Componentes/CardMoedasWallet';
import CardBalanceCritpomoeda from '../../Componentes/CardBalanceCriptomoeda';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';
import CardTransacoes from '../../Componentes/CardTransacoes';

const ScreenWallet: React.FC<NavigationProps> = ({navigation}) => {
  const [valorRecebido, setValoRecebido] = useState<string>('0.000000000012');

  return (
    <View style={styles.container}>
      <View style={{padding: 10}}>
        <View style={{height: 25}} />
        <CardMoedasWallet />
        <View style={{height: 25}} />
        <CardBalanceCritpomoeda />
        <AppText size="huge" style={styles.transacoes} color="white">
          Transações
        </AppText>
      </View>
      <ScrollView>
        <CardTransacoes iconName="ethImg" moeda="eth" />
        <CardTransacoes iconName="arkImg" moeda="ark" />
        <CardTransacoes iconName="bitImg" />
        <CardTransacoes iconName="dashImg" moeda="dash" value={valorRecebido} />
        <CardTransacoes />
        <CardTransacoes />
        <CardTransacoes />
        <CardTransacoes />
      </ScrollView>
    </View>
  );
};

export default ScreenWallet;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#1a1d1b', padding: 0},
  transacoes: {marginTop: 15},
});
