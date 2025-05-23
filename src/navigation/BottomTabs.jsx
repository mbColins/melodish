/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import { CookingPot, Home,Search } from 'lucide-react-native';
import SearchScreen from '../screens/searchscreen';
import CusinesScreen from '../screens/cusines';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="tab" component={HomeScreen} options={{
        tabBarLabel:'Home',
        headerShown:false,
        tabBarIcon:() => <Home/>,
        // tabBarActiveTintColor:'green',
      }}/>
          <Tab.Screen name="cusines" component={CusinesScreen} options={{
        tabBarLabel:'cusines',
        headerShown:false,
        tabBarIcon:() => <CookingPot/>,
      }}/>
      <Tab.Screen name="search" component={SearchScreen} options={{
        tabBarLabel:'search',
        headerShown:false,
        tabBarIcon:({focused,color,size}) => (<Search color={color} size={size}/>),
         tabBarActiveTintColor: 'green',
         tabBarInactiveTintColor: 'green',
      }}/>

  
    </Tab.Navigator>
  );
};

export default BottomTabs;

