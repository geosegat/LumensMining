import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';

interface AppTextProps {
  variant?: 'normal' | 'medium' | 'semiBold' | 'bold';
  size?:
    | 'small'
    | 'normal'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
    | 'huge'
    | 'xhuge'
    | 'xxhuge'
    | 'super';
  color?: string;
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
}

const AppText: React.FC<AppTextProps> = ({
  variant = 'normal',
  size = 'normal',
  color = '#333',
  children,
  style,
  numberOfLines,
}) => {
  const sizes: {[key: string]: number} = {
    small: 12,
    normal: 14,
    large: 16,
    xlarge: 18,
    xxlarge: 20,
    xxxlarge: 22,
    huge: 24,
    xhuge: 28,
    xxhuge: 36,
    super: 50,
  };

  const variants: {[key: string]: TextStyle['fontWeight']} = {
    normal: 'normal',
    medium: '300',
    semiBold: '500',
    bold: '700',
  };

  const styles = StyleSheet.create({
    text: {fontSize: sizes[size], fontWeight: variants[variant], color},
  });

  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
