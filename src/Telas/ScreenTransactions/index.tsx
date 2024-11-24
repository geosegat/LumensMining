import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ScreenTransactions = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity style={{backgroundColor: 'red'}}>
        <Text style={{color: 'black', fontSize: 42}}>Perfil</Text>
      </TouchableOpacity>

      <View style={{backgroundColor: 'yellow', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text>Nome:</Text>
          <Text>Gabriel</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text>Idade:</Text>
          <Text>28</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text>Sobre:</Text>
          <Text>Desenvolver front end</Text>
        </View>
      </View>
    </View>
  );
};

export default ScreenTransactions;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#1a1d1b'},
});
