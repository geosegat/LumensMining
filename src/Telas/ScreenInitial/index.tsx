import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../Componentes/AppText';
import {NavigationProps} from '../../utilitis/types/navigation';
import CardButton from '../../Componentes/CardButton';
import CardLogo from '../../Componentes/CardLogo';
import SvgLogo from '../../svgs/bitcoin.svg';

const ScreenInitial: React.FC<NavigationProps> = ({navigation}) => {
  const onPressLogin = () => {
    navigation.navigate('ScreenLogin');
  };
  const onPressCadastro = () => {
    navigation.navigate('ScreenRegister');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <SvgLogo width={100} height={100} color={'#cfd2d4'} />
        <CardLogo label={'Lumens'} />
        <CardLogo label={'Mining'} />
        <AppText style={{marginTop: 10}} color="#fff">
          Pioneering a Decentralized Future
        </AppText>
        <AppText color="#fff">One Block at a Time.</AppText>
      </View>

      <View style={{marginTop: 50}}>
        <CardButton label="Login" onPress={onPressLogin} />
        <CardButton
          style={{marginTop: 15}}
          label="Cadastro"
          onPress={onPressCadastro}
        />
      </View>
    </View>
  );
};

export default ScreenInitial;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242c33',
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  containerLogo: {alignItems: 'center'},
});
