import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProps} from '../../utilitis/types/navigation';
import SvgSeta from '../../svgs/seta.svg';
import CardProfile from '../../Componentes/CardProfile';
import CardBalanceAccount from '../../Componentes/CardBalanceAccount';
import AppText from '../../Componentes/AppText';
import CardAddMaisMaquina from '../../Componentes/CardAddMaisMaquina';
import CardMining from '../../Componentes/CardMining';

const ScreenAccount: React.FC<NavigationProps> = ({navigation}) => {
  const [totalMineirado, setTotalMineirado] = useState(0);

  const handleMineirado = (valorMineirado: number) => {
    setTotalMineirado(prevTotal => prevTotal + valorMineirado);
  };

  return (
    <View style={{backgroundColor: '#242c33', flex: 1}}>
      <View style={styles.container}>
        <View style={{padding: 15}}>
          <CardProfile label="Fulano Assado Da Silva" />
          <CardBalanceAccount />
        </View>

        <ScrollView style={styles.containerScrollView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
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
              R${totalMineirado}
            </AppText>
            <AppText style={styles.marginLeft} color="#FFF" size="small">
              24/h
            </AppText>
          </View>
          {/* <CardMining onMineirado={handleMineirado} />
          <CardMining onMineirado={handleMineirado} /> */}
          <CardAddMaisMaquina />
          <CardAddMaisMaquina />
          <CardAddMaisMaquina />
        </ScrollView>
      </View>
    </View>
  );
};

export default ScreenAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242c33',
    flex: 1,
  },
  containerScrollView: {
    backgroundColor: '#1a1d1b',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  marginLeft: {marginLeft: 5},
});
