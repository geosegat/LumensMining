import {Alert, Button, StyleSheet, Text, View} from 'react-native';
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
  const [errorMessage, setErrorMessage] = useState('');

  const onPressReturn = () => {
    navigation.navigate('ScreenHome');
  };

  const handleRegistrationSuccess = async () => {
    setLoading(true);
    setErrorMessage(''); // Limpa a mensagem de erro

    if (
      email.trim() === '' ||
      password.trim() === '' ||
      nameUser.trim() === '' ||
      cpf.trim() === ''
    ) {
      setErrorMessage('Todos os campos são obrigatórios');
      setLoading(false);
      return;
    }
    if (cpf.length !== 11) {
      setErrorMessage('Digite um CPF válido');
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
        balance: 50, // Definindo saldo inicial como 0
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      console.log('Usuário criado com sucesso e dados salvos no Firestore');

      Alert.alert(
        'Conta Criada',
        'Conta criada com sucesso',
        [
          {
            text: 'OK',
            onPress: () => console.log('conta criada'),
          },
        ],
        {cancelable: false},
      );
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          setErrorMessage('Digite um e-mail válido.');
          break;
        case 'auth/email-already-in-use':
          setErrorMessage('Email já está em uso.');
          break;
        case 'auth/weak-password':
          setErrorMessage('A senha deve ter pelo menos 6 caracteres.');
          break;
        default:
          setErrorMessage(
            'Erro ao registrar usuário. Tente novamente mais tarde.',
          );
          console.error('Erro ao registrar usuário:', error);
          break;
      }
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

        {errorMessage ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        ) : null}

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
  errorContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});
