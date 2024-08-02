import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgBack from '../../svgs/arrow-left.svg';

interface ButtonBackProps {
  onPressReturn: () => void;
}

const ButtonBack = ({onPressReturn}: ButtonBackProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressReturn}>
      <SvgBack height={30} width={30} color={'white'} />
    </TouchableOpacity>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  container: {width: 30},
});
