/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import { Home } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="tab" component={HomeScreen} options={{
        tabBarLabel:'Home',
        headerShown:false,
        tabBarIcon:() => <Home/>,
        tabBarLabelStyle:{color:'green'},
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
