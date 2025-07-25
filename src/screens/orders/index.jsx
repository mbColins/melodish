/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';
import Button from '../../components/Button';
import { useTranslation } from 'react-i18next';
import OrdersComponent from '../../components/Orders';

const img = require('../../assets/images/food5.jpg');
const cartItem = [
  {
    image: img, // one image for all menu items in this group
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
    image: img, // one image for all menu items in this group
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
    image: img, // one image for all menu items in this group
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




const OrdersCreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1 }} >
      <Header
        title={t('orderScreen.my_orders')}
        headerTitleStyle={{ marginHorizontal: 70 }}
        headerLeft={() => (
          <Pressable onPress={() => navigation.goBack()}
            style={styles.headerLeftBtn}>
            <ChevronLeft />
            <Text style={{ paddingVertical: 2 }}>cart</Text>
          </Pressable>)}
      />


      <FlatList
        data={cartItem}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <OrdersComponent image={item.image} menuItem={item.menuItem} />
        )}
      />


    </View>
  );
};

export default OrdersCreen;

const styles = StyleSheet.create({
      headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },

});
