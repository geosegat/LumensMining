import {StyleSheet, TextInput, View, KeyboardTypeOptions} from 'react-native';
import React from 'react';
import SvgPass from '../../svgs/senha.svg';
import SvgUser from '../../svgs/user.svg';

interface CardInputProps {
  label: string;
  svgType: 'user' | 'pass';
  style?: {};
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
}

const CardInput = ({
  label,
  svgType,
  style,
  keyboardType,
  secureTextEntry,
  onChangeText,
}: CardInputProps) => {
  const SvgComponent = svgType === 'user' ? SvgUser : SvgPass;

  return (
    <View style={[styles.container, style]}>
      <SvgComponent width={20} height={20} color={'#768186'} />
      <TextInput
        onChangeText={onChangeText}
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
