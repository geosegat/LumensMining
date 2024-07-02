import {StyleSheet, TextInput, View, KeyboardTypeOptions} from 'react-native';
import React from 'react';
import SvgPass from '../../svgs/senha.svg';
import SvgUser from '../../svgs/user.svg';
import SvgEmail from '../../svgs/email.svg';
import SvgCpfUser from '../../svgs/cpfuser.svg';

interface CardInputProps {
  label: string;
  svgType?: 'user' | 'pass' | 'email' | 'cpf';
  style?: {};
  maxLength?: number | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string;
}

const CardInput = ({
  label,
  svgType,
  style,
  keyboardType,
  secureTextEntry,
  maxLength,
  onChangeText,
  value,
}: CardInputProps) => {
  const svgComponents = {
    user: SvgUser,
    pass: SvgPass,
    email: SvgEmail,
    cpf: SvgCpfUser,
  };

  const SvgComponent = svgType ? svgComponents[svgType] : null;

  return (
    <View style={[styles.container, style]}>
      {SvgComponent && (
        <SvgComponent width={20} height={20} color={'#b3b3b3'} />
      )}
      <TextInput
        maxLength={maxLength}
        onChangeText={onChangeText}
        style={{
          marginLeft: 10,
          color: '#fff',
          flex: 1,
        }}
        placeholderTextColor={'#b3b3b3'}
        placeholder={label}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
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
