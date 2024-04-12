import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import AppText from '../../Componentes/AppText';
import CardInput from '../../Componentes/CardInput';

const ScreenRegister: React.FC<NavigationProps> = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('ScreenInitial');
  };
  return (
    <View style={styles.container}>
      <AppText color="#fff">Cadastre-se</AppText>
      <CardInput label="Email" />
      <Button title="voltar" onPress={onPress} />
    </View>
  );
};

export default ScreenRegister;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242c33',
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
});
