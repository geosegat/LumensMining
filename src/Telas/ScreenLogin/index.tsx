import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import CardInput from '../../Componentes/CardInput';
import CardButton from '../../Componentes/CardButton';
import SvgLogo from '../../svgs/bitcoin.svg';
import CardLogo from '../../Componentes/CardLogo';
import AppText from '../../Componentes/AppText';

const ScreenLogin: React.FC<NavigationProps> = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('ScreenInitial');
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <SvgLogo width={100} height={100} color={'#cfd2d4'} />
        <CardLogo label={'Lumens'} />
        <CardLogo label={'Mining'} />
        <AppText style={{marginTop: 10}} color="#fff">
          Pioneering a Decentralized Future
        </AppText>
        <AppText color="#fff">One Block at a Time.</AppText>
      </View>

      <CardInput
        style={{marginTop: 20}}
        label="Enter Username"
        svgType="user"
      />
      <CardInput
        style={{marginTop: 20}}
        label="Enter Password"
        svgType="pass"
        keyboardType={'numeric'}
        secureTextEntry={true}
      />
      <AppText style={{marginTop: 10}} color="gray">
        Senha errada
      </AppText>
      <CardButton style={{marginTop: 30}} label="Login" onPress={onPress} />
    </View>
  );
};

export default ScreenLogin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242c33',
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
});
