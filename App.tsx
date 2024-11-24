import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenLogin from './src/Telas/ScreenLogin';
import ScreenRegister from './src/Telas/ScreenRegister';
import ScreenHome from './src/Telas/ScreenHome';
import ScreenAccount from './src/Telas/ScreenAccount';
import ScreenWallet from './src/Telas/ScreenWallet';
import ScreenTransactions from './src/Telas/ScreenTransactions';
import ScreenAccountSettings from './src/Telas/ScreenAccountSettings';
import CollectionSvgImg from './src/utilitis/CollectionSvgImg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5fa7bc',
        tabBarInactiveTintColor: '#0874a5',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {backgroundColor: '#002c53', borderTopWidth: 0},
      }}>
      <Tab.Screen
        name="Homee"
        component={ScreenAccount}
        options={{
          tabBarIcon: ({color, size}) => (
            <CollectionSvgImg
              isDisabled
              color={color}
              width={size}
              height={size}
              iconName={'home'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Carteira"
        component={ScreenWallet}
        options={{
          tabBarIcon: ({color, size}) => (
            <CollectionSvgImg
              isDisabled
              color={color}
              width={size}
              height={size}
              iconName={'wallet'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transações"
        component={ScreenTransactions}
        options={{
          tabBarIcon: ({color, size}) => (
            <CollectionSvgImg
              isDisabled
              color={color}
              width={size}
              height={size}
              iconName={'transacao'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={ScreenAccountSettings}
        options={{
          tabBarIcon: ({color, size}) => (
            <CollectionSvgImg
              isDisabled
              color={color}
              width={size}
              height={size}
              iconName={'perfil'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenHome">
        <Stack.Screen
          name="ScreenHome"
          component={ScreenHome}
          options={{headerShown: false}}
        />
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
        <Stack.Screen
          name="ScreenAccount"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
