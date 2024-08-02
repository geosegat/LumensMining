import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import AppText from '../../Componentes/AppText';
import CardInput from '../../Componentes/CardInputLogin';
import CardButton from '../../Componentes/CardButton';
import CardLogo from '../../Componentes/CardLogo';
import ButtonBack from '../../Componentes/ButtonBack';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ScreenRegister: React.FC<NavigationProps> = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [nameUser, setNameUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const onPressReturn = () => {
    navigation.navigate('ScreenInitial');
  };

  const handleRegistrationSuccess = async () => {
    setLoading(true);
    if (email.trim() === '' || password.trim() === '') {
      console.log('Email e senha são obrigatórios');
      setLoading(false);
      return;
    }

    try {
      // Cria o usuário com email e senha
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const {user} = userCredential;

      // Salva informações adicionais no Firestore
      await firestore().collection('users').doc(user.uid).set({
        cpf: cpf,
        name: nameUser,
        email: email,
        balance: 0, // Definindo saldo inicial como 0
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      console.log('Usuário criado com sucesso e dados salvos no Firestore');
      navigation.navigate('ScreenAccount');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ButtonBack onPressReturn={onPressReturn} />
      <View style={styles.container2}>
        <CardLogo label="Lumens" label2="Mining" />
        <View style={{alignItems: 'center', marginBottom: 10}}>
          <AppText size="xlarge" color="#fff">
            Cadastre-se agora na Lumens Mining
          </AppText>
        </View>
        <CardInput
          onChangeText={nameUser => setNameUser(nameUser)}
          svgType="user"
          label="Nome"
        />
        <CardInput
          onChangeText={email => setEmail(email)}
          svgType="email"
          label="Email"
        />
        <CardInput
          onChangeText={cpf => setCpf(cpf)}
          keyboardType="numeric"
          svgType="cpf"
          label="Cpf"
          maxLength={11}
        />
        <CardInput
          onChangeText={password => setPassword(password)}
          svgType="pass"
          label="Senha"
          maxLength={6}
          secureTextEntry={true}
          keyboardType="numeric"
        />

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
    backgroundColor: '#1a1d1b',
    flex: 1,
    padding: 15,
  },
  container2: {justifyContent: 'center', flex: 1},
});
