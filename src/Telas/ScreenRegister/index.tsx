import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import AppText from '../../Componentes/AppText';
import CardInput from '../../Componentes/CardInputLogin';
import CardButton from '../../Componentes/CardButton';
import CardLogo from '../../Componentes/CardLogo';
import ButtonBack from '../../Componentes/ButtonBack';

const ScreenRegister: React.FC<NavigationProps> = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const onPressReturn = () => {
    navigation.navigate('ScreenInitial');
  };

  const handleRegistrationSuccess = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('ScreenAccount');
      setLoading(false);
    }, 1000);
  };
  return (
    <View style={styles.container}>
      <ButtonBack onPressReturn={onPressReturn} />
      <View style={styles.container2}>
        <CardLogo label="Lumens" label2="Mining" />
        <View style={{alignItems: 'center', marginTop: 15}}>
          <AppText size="xlarge" color="#fff">
            Cadastre-se na Lumens Mining
          </AppText>
        </View>
        <CardInput style={{marginTop: 15}} svgType="user" label="Usuário" />
        <CardInput svgType="cpf" label="Cpf" keyboardType="numeric" />
        <CardInput
          svgType="pass"
          label="Senha"
          maxLength={6}
          secureTextEntry={true}
          keyboardType="numeric"
        />
        <CardInput
          svgType="pass"
          label="Confirme sua senha"
          maxLength={6}
          secureTextEntry={true}
          keyboardType="numeric"
        />
        <CardInput svgType="email" label="Email" />

        <CardButton
          style={{marginTop: 20}}
          label="Cadastrar"
          onPress={handleRegistrationSuccess}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default ScreenRegister;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242c33',
    flex: 1,
    padding: 15,
  },
  container2: {justifyContent: 'center', flex: 1},
});
