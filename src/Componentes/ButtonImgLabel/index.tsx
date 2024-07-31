import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';

interface ButtomImgLabel {
  label: string;
  iconName: string;
}
const ButtomImgLabel: React.FC<ButtomImgLabel> = ({label, iconName}) => {
  return (
    <TouchableOpacity style={styles.buttonMoedas}>
      <CollectionSvgImg
        isDisabled={true}
        color={'#fff'}
        height={25}
        width={25}
        iconName={iconName}
      />
      <AppText style={styles.marginTextMoedas} color="#fff" size="large">
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default ButtomImgLabel;

const styles = StyleSheet.create({
  buttonMoedas: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#673ab7',
    padding: 10,
    borderRadius: 20,
  },
  marginTextMoedas: {marginLeft: 10},
});
