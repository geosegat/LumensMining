import React, {useCallback, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationProps} from '../../utilitis/types/navigation';
import SvgSeta from '../../svgs/seta.svg';
import CardProfile from '../../Componentes/CardProfile';
import CardBalanceAccount from '../../Componentes/CardBalanceAccount';
import AppText from '../../Componentes/AppText';
import CardMining from '../../Componentes/CardMining';
import CardTopoBar from '../../Componentes/CardTopoBar';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CardModalSetting from '../../Componentes/CardModalSetting';
import {useFocusEffect} from '@react-navigation/native';

const BITCOIN_VALOR = 367248.56; // Valor em reais por Bitcoin
const DASH_VALOR = 146.63; // Valor em reais por Dash

const ScreenAccount: React.FC<NavigationProps> = ({navigation}) => {
  const [totalMineiradoBTC, setTotalMineiradoBTC] = useState(0);
  const [totalMineiradoDASH, setTotalMineiradoDASH] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState<any>(null);

  const user = auth().currentUser;

  const fetchUserData = async () => {
    setUsuarioLogado(user);

    if (user) {
      try {
        const userDoc = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();
        if (userDoc.exists) {
          setUsuarioLogado(userDoc);
        } else {
          console.log('Usuário não encontrado!');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    }
  };

  const onPressVerify = () => {
    console.log(usuarioLogado);
  };

  const padronizarNome = (nome: string) => {
    return nome
      .split(' ')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(' ');
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onPressSair = async () => {
    try {
      await auth().signOut();
      navigation.navigate('ScreenLogin');
    } catch (error) {
      console.log('Não foi possível sair:', error);
    }
  };

  const calcularValorEmReais = (
    quantidade: number,
    valorPorUnidade: number,
  ) => {
    return quantidade * valorPorUnidade;
  };

  const handleMineirado = (valorMineirado: number, tipo: 'BTC' | 'DASH') => {
    if (tipo === 'BTC') {
      setTotalMineiradoBTC(prevTotal => prevTotal + valorMineirado);
    } else if (tipo === 'DASH') {
      setTotalMineiradoDASH(prevTotal => prevTotal + valorMineirado);
    }
  };

  const totalMineiradoReais =
    calcularValorEmReais(totalMineiradoBTC, BITCOIN_VALOR) +
    calcularValorEmReais(totalMineiradoDASH, DASH_VALOR);

  return (
    <View style={styles.containerGlobal}>
      <View style={styles.container}>
        <Image
          style={styles.styleBackGround}
          source={require('../../svgs/pngConvert/img-background.jpg')}
        />

        <View style={{padding: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CardProfile label="oi" />
            <CardTopoBar onPress={toggleModal} />
          </View>
          <CardBalanceAccount balance={0} />
        </View>

        <ScrollView style={styles.containerScrollView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              padding: 10,
            }}>
            <AppText color="#fff" size="xxlarge" variant="bold">
              Mineração
            </AppText>
            <SvgSeta
              style={styles.marginLeft}
              color={'green'}
              width={24}
              height={24}
            />
            <AppText style={styles.marginLeft} color="#FFF" size="xlarge">
              R${totalMineiradoReais.toFixed(2)}
            </AppText>
            <AppText style={styles.marginLeft} color="#FFF" size="small">
              24/h
            </AppText>
          </View>
          <CardMining
            iconName="bitcoinImg"
            criptoName="Bitcoin"
            onMineirado={valorMineirado =>
              handleMineirado(valorMineirado, 'BTC')
            }
            moedaValor={BITCOIN_VALOR}
          />

          <CardMining
            iconName="dashImg"
            criptoName="Dash"
            onMineirado={valorMineirado =>
              handleMineirado(valorMineirado, 'DASH')
            }
            moedaValor={DASH_VALOR}
            casasDecimais={5} // Adiciona a configuração de casas decimais
          />
        </ScrollView>
      </View>
      <CardModalSetting
        onPress={onPressSair}
        onPressVerify={onPressVerify}
        isVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </View>
  );
};

export default ScreenAccount;

const styles = StyleSheet.create({
  containerGlobal: {backgroundColor: '#242c33', flex: 1},
  container: {
    backgroundColor: '#242c33',
    flex: 1,
  },
  styleBackGround: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
  },
  containerScrollView: {
    backgroundColor: '#1a1d1b',
    padding: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  marginLeft: {marginLeft: 5},
});
