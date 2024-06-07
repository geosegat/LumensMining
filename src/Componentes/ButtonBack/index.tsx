import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgBack from '../../svgs/arrow-left.svg';

interface ButtonBackProps {
  onPressReturn: () => void;
}

const ButtonBack = ({onPressReturn}: ButtonBackProps) => {
  return (
    <TouchableOpacity onPress={onPressReturn}>
      <SvgBack height={30} width={30} color={'#114aa0'} />
    </TouchableOpacity>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({});
