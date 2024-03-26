import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';

interface CardLogoProps {
  label: string;
}

const CardLogo = ({label}: CardLogoProps) => {
  return (
    <AppText color="#cfd2d4" variant="bold" size={'xxhuge'}>
      {label}
    </AppText>
  );
};

export default CardLogo;

const styles = StyleSheet.create({});
