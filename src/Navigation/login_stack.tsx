import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from 'src/Screens/LoginScreen';
import {RegistrationScreen} from 'src/Screens/RegistrationScreen';
import {LOGIN_ROUTE, REGISTER_ROUTE} from './routes';

export type LoginStackParamList = {
  [LOGIN_ROUTE]: {};
  [REGISTER_ROUTE]: {};
};

const LoginStack = createNativeStackNavigator<LoginStackParamList>();

export const LoginNavigation = () => {
  return (
    <LoginStack.Navigator
      initialRouteName={LOGIN_ROUTE}
      screenOptions={{gestureEnabled: false}}>
      <LoginStack.Screen
        name={LOGIN_ROUTE}
        component={LoginScreen}
        options={{
          header: () => null,
        }}
      />
      <LoginStack.Screen
        name={REGISTER_ROUTE}
        component={RegistrationScreen}
        options={{
          header: () => null,
        }}
      />
    </LoginStack.Navigator>
  );
};
