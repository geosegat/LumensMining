import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import AppText from '../../Componentes/AppText';
import CardMoedasWallet from '../../Componentes/CardMoedasWallet';
import CardBalanceCriptomoeda from '../../Componentes/CardBalanceCriptomoeda';
import CardTransacoes from '../../Componentes/CardTransacoes';
import CardModalMoeda, {Coin} from '../../Componentes/CardModalMoeda';

const ScreenWallet: React.FC<NavigationProps> = ({navigation}) => {
  const [valorRecebido, setValorRecebido] = useState<number>(0.00006769);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const coins: Coin[] = [
    {id: '1', name: 'Bitcoin', value: 'bitImg', sigla: 'btc'},
    {id: '2', name: 'DogeCoin', value: 'dogeImg', sigla: 'dog'},
    {id: '3', name: 'Ark', value: 'arkImg', sigla: 'ark'},
    {id: '4', name: 'Dash', value: 'dashImg', sigla: 'dash'},
  ];

  return (
    <View style={styles.container}>
      <View style={{padding: 10}}>
        <View style={{height: 25}} />
        <CardMoedasWallet onPress={toggleModal} />
        <View style={{height: 25}} />
        <CardBalanceCriptomoeda
          iconName={selectedCoin ? selectedCoin.value : 'arkImg'}
          moeda={selectedCoin ? selectedCoin.name : 'Ark'}
          balance={36.13003924}
          criptoSigla={selectedCoin ? selectedCoin.sigla : 'ark'}
        />
        <AppText size="huge" style={styles.transacoes} color="white">
          Transações
        </AppText>
      </View>
      <ScrollView>
        <CardTransacoes iconName="dogeImg" moeda="dog" value={36.13003924} />
        <CardTransacoes iconName="arkImg" moeda="ark" value={11.72506138} />
        <CardTransacoes iconName="bitImg" value={0.16565596} />
        <CardTransacoes iconName="dashImg" moeda="dash" value={valorRecebido} />
        <CardTransacoes />
      </ScrollView>
      <CardModalMoeda
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        setSelectedCoin={setSelectedCoin}
        coins={coins}
      />
    </View>
  );
};

export default ScreenWallet;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#1a1d1b', padding: 0},
  transacoes: {marginTop: 15},
});
