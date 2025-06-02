/* eslint-disable react/no-unstable-nested-components */
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';
import BackNavigation from '../../components/BackNavigation';
import OrdersComponent from '../../components/Orders';

const img = require('../../assets/images/food5.jpg');


const cartItem = [
  {
    image: img,
    status:'rejected', // one image for all menu items in this group
    menuItem: [
      {
        quantity: 1,
        name: 'Fried rice',
        price: '300f',
      },
      {
        quantity: 2,
        name: 'Jollof rice',
        price: '400f',
      },
      {
        quantity: 3,
        name: 'Chicken wings',
        price: '500f',
      },
    ],
  },
  {
    image: img,
    status:'accepted',// one image for all menu items in this group
    menuItem: [
      {
        quantity: 1,
        name: 'Fried rice',
        price: '300f',
      },
      {
        quantity: 2,
        name: 'Jollof rice',
        price: '400f',
      },
      {
        quantity: 3,
        name: 'Chicken wings',
        price: '500f',
      },
    ],
  },
  {
    image: img,
    status:'rejected', // one image for all menu items in this group
    menuItem: [
      {
        quantity: 1,
        name: 'Fried rice',
        price: '300f',
          },
      {
        quantity: 2,
        name: 'Jollof rice',
        price: '400f',
      },
      {
        quantity: 3,
        name: 'Chicken wings',
        price: '500f',
      },
    ],
  },
];

const OrderHistoryScreen = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
  return (
    <View style={{flex:1}}>
        <Header
        title={t('orderScreen.order_history')}
        headerTitleAlign="center"
        headerLeft={() => (<BackNavigation text={t('profile')}  onPress={() => navigation.goBack()}/>)}
        />
      <FlatList
        data={cartItem}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <OrdersComponent image={item.image} menuItem={item.menuItem} history={true} status={item.status} />
        )}
      />
    </View>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({});
