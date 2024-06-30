import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import AppText from '../../Componentes/AppText';
import CardInput from '../../Componentes/CardInputLogin';
import CardButton from '../../Componentes/CardButton';
import CardLogo from '../../Componentes/CardLogo';
import ButtonBack from '../../Componentes/ButtonBack';
import auth from '@react-native-firebase/auth';

const ScreenRegister: React.FC<NavigationProps> = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const onPressReturn = () => {
    navigation.navigate('ScreenInitial');
  };

  const handleRegistrationSuccess = () => {
    setLoading(true);
    if (email.trim() === '' || password.trim() === '') {
      // Verifica se email ou senha estão vazios
      console.log('Email e senha são obrigatórios');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Usuário criado com sucesso');
        setLoading(false);
        // Navegar para a próxima tela ou realizar outras ações após o registro
      })
      .catch(error => {
        setLoading(false);
        console.error('Erro ao registrar usuário:', error);
        // Trate o erro adequadamente, exibindo uma mensagem ao usuário, por exemplo
      });
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
        <CardInput
          onChangeText={text => setEmail(text)}
          svgType="user"
          label="Nome"
        />
        <CardInput
          onChangeText={text => setEmail(text)}
          svgType="email"
          label="Email"
        />
        <CardInput
          onChangeText={text => setEmail(text)}
          svgType="cpf"
          label="Cpf"
        />
        <CardInput
          onChangeText={text => setPassword(text)}
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
    backgroundColor: '#242c33',
    flex: 1,
    padding: 15,
  },
  container2: {justifyContent: 'center', flex: 1},
});
