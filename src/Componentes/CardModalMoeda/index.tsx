import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import AppText from '../AppText';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';

export interface Coin {
  id: string;
  name: string;
  value: string;
  sigla: string;
}

interface CardModalMoedaProps {
  isVisible: boolean;
  toggleModal: () => void;
  setSelectedCoin: (coin: Coin) => void;
  coins: Coin[];
}

const CardModalMoeda: React.FC<CardModalMoedaProps> = ({
  isVisible,
  toggleModal,
  setSelectedCoin,
  coins,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropColor="black"
      backdropOpacity={0.5}
      onBackdropPress={toggleModal}>
      <View style={styles.modalContent}>
        <AppText size="huge" style={styles.modalTitle} color="#fff">
          Selecione uma Moeda
        </AppText>
        {coins.map(coin => (
          <TouchableOpacity
            key={coin.id}
            style={styles.coinItem}
            onPress={() => {
              setSelectedCoin(coin);
              toggleModal();
            }}>
            <CollectionSvgImg iconName={coin.value} width={25} height={25} />
            <AppText size="large" color="#fff" style={{marginLeft: 5}}>
              {coin.name}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

export default CardModalMoeda;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#002c53',
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
