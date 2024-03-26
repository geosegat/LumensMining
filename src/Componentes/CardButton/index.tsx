import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../AppText';

interface CardButtonProps {
  label: string;
  onPress: () => void;
  style?: {};
}

const CardButton = ({label, onPress, style}: CardButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AppText color="#cfd2d4" size="large" variant="bold">
        {label ?? 'Next'}
      </AppText>
    </TouchableOpacity>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#114aa0',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
});
