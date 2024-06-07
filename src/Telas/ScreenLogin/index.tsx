import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import CardInput from '../../Componentes/CardInputLogin';
import CardButton from '../../Componentes/CardButton';
import SvgLogo from '../../svgs/bitcoin.svg';
import CardLogo from '../../Componentes/CardLogo';
import AppText from '../../Componentes/AppText';
import SvgBack from '../../svgs/arrow-left.svg';
import ButtonBack from '../../Componentes/ButtonBack';

const ScreenLogin: React.FC<NavigationProps> = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const onPress = () => {
    if (user === '123' && pass === '123') {
      setMessage('Senha ok');
      setTimeout(() => {
        navigation.navigate('ScreenAccount');
      }, 1500);
    } else {
      setMessage('Senha errada');
    }
  };

  const onPressReturn = () => {
    navigation.navigate('ScreenInitial');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#242c33', padding: 15}}>
      <ButtonBack onPressReturn={onPressReturn} />
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
          onChangeText={u => setUser(u)}
          style={{marginTop: 20}}
          label="Enter Username"
          svgType="user"
        />
        <CardInput
          onChangeText={p => setPass(p)}
          style={{marginTop: 20}}
          label="Enter Password"
          svgType="pass"
          keyboardType={'numeric'}
          secureTextEntry={true}
        />
        <AppText style={{marginTop: 10}} color={'gray'}>
          {message}
        </AppText>
        <CardButton style={{marginTop: 10}} label="Login" onPress={onPress} />
        <TouchableOpacity style={{marginTop: 10, alignItems: 'center'}}>
          <AppText color="white">Esqueceu sua senha?</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
