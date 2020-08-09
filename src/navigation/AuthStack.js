import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen, LoginScreen, RegisterScreen, ForgotPasswordScreen } from '../screens';

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home Page', headerLeft: () => { disabled: true }, headerTitleAlign: 'center' }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login Page' }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Signup Page' }} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ title: 'Forgot Password Page' }} />
    </Stack.Navigator>
  );
}
