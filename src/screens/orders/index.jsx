/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';

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
  return (
    <View style={{ flex: 1 }} >
      <Header
        title="My orders"
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
    <View>
      {/* Shared image for the group */}
      <Image source={item.image} style={styles.imgStyle} />

      {/* List of items under that image */}
      {item.menuItem.map((menu, idx) => (
        <View key={idx} style={styles.carts}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={styles.qty}>{menu.quantity}</Text>
            <Text style={{ marginLeft: 10 }}>{menu.name}</Text>
          </View>
          <Text>{menu.price}</Text>
        </View>
      ))}
    </View>
  )}
/>


    </View>
  );
};

export default OrdersCreen;

const styles = StyleSheet.create({
  headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },
  imgStyle: { height: 200, margin: 5, width: '98%' },
  carts: { display: 'flex', flexDirection: 'row', gap: '10', paddingHorizontal: 10, margin: 4, justifyContent: 'space-between' },
  qty: { borderWidth: 1, padding: 2, width: 20, height: 22, textAlign: 'center', borderColor: 'green' },

});
