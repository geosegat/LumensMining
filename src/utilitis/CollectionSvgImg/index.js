import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgSetting from '../../svgs/settings.svg';
import SvgHome from '../../svgs/home.svg';
import SvgWallet from '../../svgs/wallet.svg';
import SvgTransacoes from '../../svgs/transacao.svg';
import SvgPerfil from '../../svgs/profile.svg';
import SvgClaim from '../../svgs/claim.svg';

const CollectionSvgImg = ({
  iconName = 'home',
  width,
  height,
  color = color,
  onPress = () => {},
  style = styles.container,
  isDisabled = false,
}) => {
  let iconComponent;

  switch (iconName) {
    case 'setting':
      iconComponent = (
        <SvgSetting width={width} height={height} color={color} />
      );
      break;
    case 'home':
      iconComponent = <SvgHome width={width} height={height} color={color} />;
      break;
    case 'wallet':
      iconComponent = <SvgWallet width={width} height={height} color={color} />;
      break;
    case 'transacao':
      iconComponent = (
        <SvgTransacoes width={width} height={height} color={color} />
      );
      break;
    case 'perfil':
      iconComponent = <SvgPerfil width={width} height={height} color={color} />;
      break;
    case 'claim':
      iconComponent = <SvgClaim width={width} height={height} color={color} />;
      break;
    case 'bitcoinImg':
      iconComponent = (
        <Image
          source={require('../../svgs/pngConvert/bitcoinIcon.png')}
          style={{height: height, width: width}}
        />
      );
      break;
    case 'ethImg':
      iconComponent = (
        <Image
          source={require('../../svgs/pngConvert/etheriumIcon.png')}
          style={{height: height, width: width}}
        />
      );
      break;
    case 'arkImg':
      iconComponent = (
        <Image
          source={require('../../svgs/pngConvert/arkIcon.png')}
          style={{height: height, width: width}}
        />
      );
      break;
    case 'bitImg':
      iconComponent = (
        <Image
          source={require('../../svgs/pngConvert/bitcoin.png')}
          style={{height: height, width: width}}
        />
      );
      break;
    case 'dashImg':
      iconComponent = (
        <Image
          source={require('../../svgs/pngConvert/dashIcon.png')}
          style={{height: height, width: width}}
        />
      );
      break;
  }
  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress} style={[style]}>
      {iconComponent}
    </TouchableOpacity>
  );
};

export default CollectionSvgImg;

const styles = StyleSheet.create({
  container: {},
});
