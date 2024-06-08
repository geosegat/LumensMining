import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import CardInput from '../../Componentes/CardInputLogin';
import CardButton from '../../Componentes/CardButton';
import SvgLogo from '../../svgs/bitcoin.svg';
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
        setMessage('Senha ok');
      } else {
        setMessage('Senha errada');
      }
    }, 1500);
  };

  const onPressReturn = () => {
    navigation.navigate('ScreenInitial');
  };
  return (
    <View style={styles.container}>
      <ButtonBack onPressReturn={onPressReturn} />
      <View style={styles.containerCenter}>
        <View style={styles.containerLogo}>
          <SvgLogo width={100} height={100} color={'#cfd2d4'} />
          <CardLogo label={'Lumens'} />
          <CardLogo label={'Mining'} />
          <AppText style={styles.margin10} color="#fff">
            Pioneering a Decentralized Future
          </AppText>
          <AppText color="#fff">One Block at a Time.</AppText>
        </View>

        <CardInput
          onChangeText={u => setUser(u)}
          style={styles.margin20}
          label="Enter Username"
          svgType="user"
        />
        <CardInput
          onChangeText={p => setPass(p)}
          style={styles.margin20}
          label="Enter Password"
          svgType="pass"
          keyboardType={'numeric'}
          secureTextEntry={true}
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
        <TouchableOpacity style={styles.containerForgotPass}>
          <AppText color="white">Esqueceu sua senha?</AppText>
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
});
