import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgSettings from '../../svgs/settings.svg';
import SvgLogo from '../../svgs/bitcoin.svg';

// Define o tipo de props para o componente
interface CardTopoBarProps {
  onPress?: () => void;
}

const CardTopoBar: React.FC<CardTopoBarProps> = ({onPress}) => {
  return (
    <View style={styles.containerCard}>
      {/* <Image
        source={require('../../svgs/pngConvert/miniLogo5.png')}
        style={{ width: 60, height: 60 }}
      /> */}

      <TouchableOpacity onPress={onPress} style={styles.containerSettingsIcon}>
        <SvgSettings width={20} height={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CardTopoBar;

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerSettingsIcon: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
});
