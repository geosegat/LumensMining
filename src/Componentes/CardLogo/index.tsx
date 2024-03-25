import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';

interface CardLogoProps {
  label: string;
}

const CardLogo = ({label}: CardLogoProps) => {
  return (
    <View>
      <AppText color="#114aa0" variant="bold" size={'xxhuge'}>
        {label}
      </AppText>
    </View>
  );
};

export default CardLogo;

const styles = StyleSheet.create({});
