import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import CardInput from '../../Componentes/CardInputLogin';
import CardButton from '../../Componentes/CardButton';
import CardLogo from '../../Componentes/CardLogo';
import AppText from '../../Componentes/AppText';
import ButtonBack from '../../Componentes/ButtonBack';

const ScreenLogin: React.FC<NavigationProps> = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const onPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (user === '123' && pass === '123') {
        navigation.navigate('ScreenAccount');
      } else {
        setMessage('Senha errada');
      }
    }, 1000);
  };

  const onPressTeste = () => {
    setUser('123');
    setPass('123');
  };

  const onPressReturn = () => {
    navigation.navigate('ScreenInitial');
  };
  return (
    <View style={styles.container}>
      <ButtonBack onPressReturn={onPressReturn} />
      <View style={styles.containerCenter}>
        <CardLogo
          label="Lumens"
          label2="Mining"
          label3="Pioneering a Decentralized Future"
          label4="One Block at a Time."
        />

        <CardInput
          onChangeText={u => setUser(u)}
          style={styles.margin20}
          label="Enter Username"
          svgType="user"
          value={user}
        />
        <CardInput
          onChangeText={p => setPass(p)}
          style={styles.margin20}
          label="Enter Password"
          svgType="pass"
          keyboardType={'numeric'}
          secureTextEntry={true}
          maxLength={8}
          value={pass}
        />
        <AppText style={styles.margin10} color={'gray'}>
          {message}
        </AppText>
        <CardButton
          style={styles.margin10}
          label="Login"
          onPress={onPress}
          loading={loading}
        />
        <TouchableOpacity
          onPress={onPressTeste}
          style={styles.containerForgotPass}>
          <AppText style={styles.link} color="white">
            Esqueceu sua senha?
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenLogin;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#242c33', padding: 15},
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
