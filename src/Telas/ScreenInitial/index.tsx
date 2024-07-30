import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
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
    <View style={styles.container}>
      <CardLogo
        label3="Pioneering a Decentralized Future"
        label4="One Block at a Time."
      />

      <View style={{marginTop: 30}}>
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
    backgroundColor: '#1a1d1b',
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  containerLogo: {alignItems: 'center'},
});
