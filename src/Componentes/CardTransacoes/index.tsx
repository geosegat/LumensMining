import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';

interface CardTransacoes {
  iconName?: string;
  value?: number;
  moeda?: string;
  style?: StyleProp<ViewStyle>;
}

const CardTransacoes: React.FC<CardTransacoes> = ({
  iconName,
  value,
  moeda,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={{flex: 1}}>
        <CollectionSvgImg
          isDisabled
          iconName={iconName ?? 'bitImg'}
          width={40}
          height={40}
        />
      </View>
      <View>
        <View style={{alignItems: 'flex-end'}}>
          <AppText size="xxxlarge" color="#fff">
            Ganhos
          </AppText>
        </View>
        <AppText size="xxxlarge" color="#fff">
          +{value ?? 0.0000019} {moeda ?? 'btc'}
        </AppText>
      </View>
    </View>
  );
};

export default CardTransacoes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#142510',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: '#4C7D40',
  },
});

//ganhos em cima
//img + valor embaixo
