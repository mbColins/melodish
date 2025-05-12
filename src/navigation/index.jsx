/* eslint-disable semi */
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home'
import LandingScreen from '../screens/landing'
import LoginScreen from '../screens/authentication/login'
import RegistrationScreen from '../screens/authentication/registration'
import WellComeScreen from '../screens/welcom'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="landing" screenOptions={{
        statusBarBackgroundColor:'green'
    }}>
      <Stack.Screen name="landing" component={LandingScreen} options={{
        headerShown:false,
      }} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="registration" component={RegistrationScreen} />
      <Stack.Screen name="welcome" component={WellComeScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default RootNavigation