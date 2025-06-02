/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import { CookingPot, Home,Search, User } from 'lucide-react-native';
import SearchScreen from '../screens/searchscreen';
import CusinesScreen from '../screens/cusines';
import ProfileScreen from '../screens/profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="tab" component={HomeScreen} options={{
        tabBarLabel:'Home',
        headerShown:false,
        tabBarIcon:({focused,color,size}) => <Home color={color} size={size}/>,
         tabBarActiveTintColor: 'green',
         tabBarInactiveTintColor: 'black',
      }}/>
          <Tab.Screen name="cusines" component={CusinesScreen} options={{
        tabBarLabel:'cusines',
        headerShown:false,
        tabBarIcon:({focused,color,size}) => <CookingPot color={color} size={size}/>,
         tabBarActiveTintColor: 'green',
         tabBarInactiveTintColor: 'black',
      }}/>
      <Tab.Screen name="search" component={SearchScreen} options={{
        tabBarLabel:'search',
        headerShown:false,
        tabBarIcon:({focused,color,size}) => (<Search color={color} size={size}/>),
         tabBarActiveTintColor: 'green',
         tabBarInactiveTintColor: 'black',
      }}/>
      <Tab.Screen name="profile" component={ProfileScreen}
      options={{
        headerShown:false,
                tabBarIcon:({focused,color,size}) => (<User color={color} size={size}/>),
                 tabBarActiveTintColor: 'green',
         tabBarInactiveTintColor: 'black',
      }}
      />
    </Tab.Navigator>

  );
};

export default BottomTabs;

