import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenLogin from './src/Telas/ScreenLogin';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenRegister from './src/Telas/ScreenRegister';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenLogin">
        <Stack.Screen
          name="ScreenLogin"
          component={ScreenLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScreenRegister"
          component={ScreenRegister}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
