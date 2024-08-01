import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import CardInput from '../../Componentes/CardInputLogin';
import CardButton from '../../Componentes/CardButton';
import CardLogo from '../../Componentes/CardLogo';
import AppText from '../../Componentes/AppText';
import ButtonBack from '../../Componentes/ButtonBack';
import auth from '@react-native-firebase/auth';

const ScreenLogin: React.FC<NavigationProps> = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onPress = () => {
    setLoading(true);
    if (email.trim() === '' || password.trim() === '') {
      setTimeout(() => {
        setMessage('Email e senha são obrigatórios');
        setLoading(false);
      }, 1000);
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('ScreenAccount');
        setLoading(false);
        setMessage('');
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/user-not-found') {
          setMessage('Usuário não encontrado. Verifique o email digitado.');
        } else if (error.code === 'auth/wrong-password') {
          setMessage('Senha incorreta. Verifique a senha digitada.');
        } else if (error.code === 'auth/invalid-email') {
          setMessage('Digite um e-mail válido.');
        } else {
          setMessage('Erro ao fazer login. Tente novamente mais tarde.');
        }
        console.log(error);
      });
  };

  const onPressTeste = () => {
    setEmail('geosegat@gmail.com');
    setPassword('020296');
  };
  const sendPasswordResetEmail = () => auth().sendPasswordResetEmail(email);

  const onPressReturn = () => {
    navigation.navigate('ScreenInitial');
  };
  return (
    <View style={styles.container}>
      <ButtonBack onPressReturn={onPressReturn} />
      <View style={styles.containerCenter}>
        <CardLogo
          label3="Pioneering a Decentralized Future"
          label4="One Block at a Time."
        />

        <CardInput
          onChangeText={u => setEmail(u)}
          style={styles.margin20}
          label="Enter email"
          svgType="email"
          value={email}
        />

        <CardInput
          onChangeText={p => setPassword(p)}
          style={styles.margin20}
          label="Enter Password"
          svgType="pass"
          keyboardType={'numeric'}
          secureTextEntry={true}
          maxLength={8}
          value={password}
        />
        <AppText style={styles.margin10} color={'#fff'}>
          {message}
        </AppText>
        <CardButton
          style={styles.margin10}
          label="Login"
          onPress={onPress}
          loading={loading}
        />
        <TouchableOpacity
          onPress={sendPasswordResetEmail}
          style={styles.containerForgotPass}>
          <AppText style={styles.link} color="white">
            Esqueceu sua senha?
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressTeste}
          style={styles.containerForgotPass}>
          <AppText style={styles.link} color="white">
            Preencher dados
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenLogin;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#1a1d1b', padding: 15},
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  containerLogo: {alignItems: 'center'},
  margin10: {marginTop: 10},
  margin20: {marginTop: 20},
  containerForgotPass: {marginTop: 10, alignItems: 'center'},
  link: {textDecorationLine: 'underline'},
});
