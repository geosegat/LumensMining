import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import AppText from '../AppText';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';

export interface Coin {
  id: string;
  name: string;
  value: string;
}

interface CardModalMoedaProps {
  isVisible: boolean;
  toggleModal: () => void;
  setSelectedCoin: (coin: string) => void;
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
  );
};

export default CardModalMoeda;

const styles = StyleSheet.create({
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
