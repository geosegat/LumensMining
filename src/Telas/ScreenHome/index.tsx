import {Alert, StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import CardButton from '../../Componentes/CardButton';
import CardLogo from '../../Componentes/CardLogo';
import auth from '@react-native-firebase/auth';

const ScreenHome: React.FC<NavigationProps> = ({navigation}) => {
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const [user, setUser] = useState<any>(null); // Estado para armazenar o usuário

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
        // Redireciona para a tela principal se o usuário estiver autenticado
        navigation.navigate('ScreenAccount'); // Substitua pelo nome real da tela principal
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Limpa o listener quando o componente é desmontado
    return () => unsubscribe();
  }, [navigation]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

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

export default ScreenHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1d1b',
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  containerLogo: {alignItems: 'center'},
});
