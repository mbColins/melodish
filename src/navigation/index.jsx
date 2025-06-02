/* eslint-disable semi */
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home'
import LandingScreen from '../screens/landing'
import LoginScreen from '../screens/authentication/login'
import RegistrationScreen from '../screens/authentication/registration'
import WellComeScreen from '../screens/welcom'
import ForgotPasswordScreen from '../screens/authentication/forgotpassword'
import ResetPasswordScreen from '../screens/authentication/resetpassword'
import BottomTabs from './BottomTabs'
import MapScreen from '../screens/mapscreen'
import RestaurantScreen from '../screens/restaurants'
import FoodPerCategoryScreen from '../screens/foodpercategory'
import MenuDetailsScreen from '../screens/menudetails'
import CartScreen from '../screens/cart'
import OrdersCreen from '../screens/orders'
import AccountDetailsScreen from '../screens/accountdetails'
import ContactUsScreen from '../screens/contact'
import SettingSreen from '../screens/settings'
import EdithProfileScreen from '../screens/edithprofile'
import FavouriteRestaurant from '../screens/favresto'
import OrderHistoryScreen from '../screens/orderhistory'
import SearchResultScreen from '../screens/searchresultscreen'
import RestaurantDetailsScreen from '../screens/restaurantdetails'
import CheckoutScreen from '../screens/checkout'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="landing" screenOptions={{
        statusBarBackgroundColor:'green',
        headerShown:false,
    }}>
      <Stack.Screen name="landing" component={LandingScreen} options={{
        headerShown:false,
      }} />
      <Stack.Screen name="home" component={BottomTabs} options={{headerShown:false,title:'',
        headerLeft:() => {
          <Text>Hello</Text>
        },
      }}/>
      <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="registration" component={RegistrationScreen} options={{headerShown:false}} />
      <Stack.Screen name="forgotpass" component={ForgotPasswordScreen} options={{headerShown:false}} />
      <Stack.Screen name="resetPass" component={ResetPasswordScreen} options={{headerShown:false}} />
      <Stack.Screen name="welcome" component={WellComeScreen} options={{headerShown:false}} />
      <Stack.Screen name="maps" component={MapScreen} options={{headerShown:false}} />
      <Stack.Screen name="resto" component={RestaurantScreen} options={{headerShown:false}} />
      <Stack.Screen name="food" component={FoodPerCategoryScreen} options={{headerShown:false}} />
      <Stack.Screen name="menu_details" component={MenuDetailsScreen} options={{headerShown:false}} />
      <Stack.Screen name="cart" component={CartScreen} options={{headerShown:false}} />
      <Stack.Screen name="orders" component={OrdersCreen} options={{headerShown:false}} />
      <Stack.Screen name="account_details" component={AccountDetailsScreen} options={{headerShown:false}} />
      <Stack.Screen name="contact_us" component={ContactUsScreen} options={{headerShown:false}} />
      <Stack.Screen name="settings" component={SettingSreen} options={{headerShown:false}} />
      <Stack.Screen name="edith_profile" component={EdithProfileScreen} options={{headerShown:false}} />
      <Stack.Screen name="favourite_resto" component={FavouriteRestaurant} options={{headerShown:false}} />
      <Stack.Screen name="order_history" component={OrderHistoryScreen} options={{headerShown:false}} />
      <Stack.Screen name="results" component={SearchResultScreen} options={{headerShown:false}} />
      <Stack.Screen name="resto_details" component={RestaurantDetailsScreen} options={{headerShown:false}} />
      <Stack.Screen name="checkout" component={CheckoutScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default RootNavigation
