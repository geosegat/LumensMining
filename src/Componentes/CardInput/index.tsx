import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import SvgPass from '../../svgs/senha.svg';
import SvgUser from '../../svgs/user.svg';

interface CardInputProps {
  label: string;
  svgType: 'user' | 'pass';
  style?: {};
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean;
}

const CardInput = ({
  label,
  svgType,
  style,
  keyboardType,
  secureTextEntry,
}: CardInputProps) => {
  const SvgComponent = svgType === 'user' ? SvgUser : SvgPass;

  return (
    <View style={[styles.container, style]}>
      <SvgComponent width={20} height={20} color={'#768186'} />
      <TextInput
        style={{marginLeft: 10, color: '#fff'}}
        placeholderTextColor={'#566269'}
        placeholder={label}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CardInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});
