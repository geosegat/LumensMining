import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {NavigationProps} from '../../utilitis/types/navigation';
import AppText from '../../Componentes/AppText';
import CardMoedasWallet from '../../Componentes/CardMoedasWallet';
import CardBalanceCritpomoeda from '../../Componentes/CardBalanceCriptomoeda';
import CardTransacoes from '../../Componentes/CardTransacoes';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';
import App from '../../../App';

const ScreenWallet: React.FC<NavigationProps> = ({navigation}) => {
  const [valorRecebido, setValoRecebido] = useState<number>(0.00006769);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState('');

  const onPress = () => {
    setModalVisible(true);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const coins = [
    {id: '1', name: 'BTC', value: 'bitImg'},
    {id: '2', name: 'ETH', value: 'ethImg'},
    {id: '3', name: 'ARK', value: 'arkImg'},
    {id: '4', name: 'DASH', value: 'dashImg'},
  ];

  return (
    <View style={styles.container}>
      <View style={{padding: 10}}>
        <View style={{height: 25}} />
        <CardMoedasWallet onPress={onPress} />
        <View style={{height: 25}} />
        <CardBalanceCritpomoeda />
        <AppText size="huge" style={styles.transacoes} color="white">
          Transações
        </AppText>
      </View>
      <ScrollView>
        <CardTransacoes iconName="ethImg" moeda="eth" />
        <CardTransacoes iconName="arkImg" moeda="ark" value={11.72506138} />
        <CardTransacoes iconName="bitImg" />
        <CardTransacoes iconName="dashImg" moeda="dash" value={valorRecebido} />
        <CardTransacoes />
        <CardTransacoes />
        <CardTransacoes />
        <CardTransacoes />
      </ScrollView>
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropColor="black"
        backdropOpacity={0.5}
        onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <AppText size="huge" style={styles.modalTitle} color="black">
            Selecione uma Moeda
          </AppText>
          {coins.map(coin => (
            <TouchableOpacity
              key={coin.id}
              style={styles.coinItem}
              onPress={() => {
                setSelectedCoin(coin.name);
                toggleModal();
              }}>
              <CollectionSvgImg iconName={coin.value} width={15} height={15} />
              <AppText style={{marginLeft: 5}}>{coin.name}</AppText>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default ScreenWallet;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#1a1d1b', padding: 0},
  transacoes: {marginTop: 15},
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    marginBottom: 10,
    textAlign: 'center',
  },
  coinItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
