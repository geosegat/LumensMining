import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../Componentes/AppText';
import {NavigationProps} from '../../utilitis/types/index';
import CardButton from '../../Componentes/CardButton';
import CardLogo from '../../Componentes/CardLogo';

const ScreenInitial: React.FC<NavigationProps> = ({navigation}) => {
  const onPressLogin = () => {
    navigation.navigate('ScreenLogin');
  };
  const onPressCadastro = () => {
    navigation.navigate('ScreenRegister');
  };

  return (
    <View>
      <View style={styles.containerLogo}>
        <CardLogo label={'Lumens'} />
        <CardLogo label={'Mining'} />
      </View>
      <CardButton label="Login" onPress={onPressLogin} />
      <CardButton label="Cadastro" onPress={onPressCadastro} />
    </View>
  );
};

export default ScreenInitial;

const styles = StyleSheet.create({
  containerLogo: {alignItems: 'center'},
});
