import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenLogin from './src/Telas/ScreenLogin';
import ScreenRegister from './src/Telas/ScreenRegister';
import ScreenInitial from './src/Telas/ScreenInitial';
import ScreenAccount from './src/Telas/ScreenAccount';
import ScreenWallet from './src/Telas/ScreenWallet';
import ScreenTransactions from './src/Telas/ScreenTransactions';
import ScreenMiningMachines from './src/Telas/ScreenMiningMachines';
import ScreenAccountSettings from './src/Telas/ScreenAccountSettings';
import SvgHome from './src/svgs/home.svg';
import SvgWallet from './src/svgs/wallet.svg';
import SvgTransacao from './src/svgs/transacao.svg';
import SvgSettings from './src/svgs/settings.svg';
import SvgProfile from './src/svgs/profile.svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#bdc644',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {backgroundColor: '#242c33', borderTopWidth: 0},
      }}>
      <Tab.Screen
        name="Home"
        component={ScreenAccount}
        options={{
          tabBarIcon: ({color, size}) => (
            <SvgHome color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Carteira"
        component={ScreenWallet}
        options={{
          tabBarIcon: ({color, size}) => (
            <SvgWallet color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Transações"
        component={ScreenTransactions}
        options={{
          tabBarIcon: ({color, size}) => (
            <SvgTransacao color={color} width={size} height={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={ScreenAccountSettings}
        options={{
          tabBarIcon: ({color, size}) => (
            <SvgProfile color={color} width={size} height={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
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
