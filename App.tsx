import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenLogin from './src/Telas/ScreenLogin';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenRegister from './src/Telas/ScreenRegister';
import ScreenInitial from './src/Telas/ScreenInitial';
import ScreenAccount from './src/Telas/ScreenAccount';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenInitial">
        <Stack.Screen
          name="ScreenInitial"
          component={ScreenInitial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScreenLogin"
          component={ScreenLogin}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ScreenRegister"
          component={ScreenRegister}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScreenAccount"
          component={ScreenAccount}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
