import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';

interface CardProfileProps {
  label: string;
}

const CardProfile = ({label}: CardProfileProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 55, height: 55}}
        source={require('../../svgs/pngConvert/perfil.png')}
      />
      <AppText
        style={styles.textStyle}
        color="white"
        size="xlarge"
        variant="bold">
        {label},
      </AppText>
    </View>
  );
};

export default CardProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  textStyle: {marginLeft: 12},
});
