import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import SvgLogo from '../../svgs/bitcoin.svg';

interface CardLogoProps {
  label: string;
  label2: string;
  label3?: string;
  label4?: string;
}

const CardLogo = ({label, label2, label3, label4}: CardLogoProps) => {
  return (
    <View style={styles.containerLogo}>
      <SvgLogo width={100} height={100} color={'#cfd2d4'} />
      <AppText color="#cfd2d4" variant="semiBold" size={'xxhuge'}>
        {label}
      </AppText>
      <AppText color="#cfd2d4" variant="semiBold" size={'xhuge'}>
        {label2}
      </AppText>
      {label3 ? (
        <AppText style={styles.margin5} color="#fff">
          {label3}
        </AppText>
      ) : null}
      {label4 ? <AppText color="#fff">{label4}</AppText> : null}
    </View>
  );
};

export default CardLogo;

const styles = StyleSheet.create({
  margin5: {marginTop: 5},
  containerLogo: {alignItems: 'center'},
});
