import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgMais from '../../svgs/mais.svg';

const CardAddMaisMaquina = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <SvgMais color={'gray'} width={105} height={105} />
    </TouchableOpacity>
  );
};

export default CardAddMaisMaquina;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#191918',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 12,
    padding: 15,
  },
});
