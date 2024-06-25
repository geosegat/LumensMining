import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../AppText';

interface CardButtonProps {
  label: string;
  onPress: () => void;
  style?: {};
  loading?: boolean;
  colorLabel?: string;
  disabled?: boolean;
}

const CardButton = ({
  label,
  onPress,
  style,
  loading,
  colorLabel,
  disabled,
}: CardButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, style]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <AppText
          color={colorLabel ?? '#cfd2d4'}
          size="large"
          variant="semiBold">
          {label ?? 'Next'}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#114aa0',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
});
