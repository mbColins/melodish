/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';


const cartItem = [
  {
    'quantity':1,
    'name':'Fried rice',
    'price':'300f'
  },
  {
    'quantity':1,
    'name':'Fried rice',
    'price':'300f'
  },
  {
    'quantity':1,
    'name':'Fried rice',
    'price':'300f'
  },
  {
    'quantity':1,
    'name':'Fried rice',
    'price':'300f'
  },
  
]

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header
        title="My cart"
        headerTitleStyle={{ marginHorizontal: 70 }}
        headerLeft={() => (
          <Pressable onPress={() => navigation.goBack()}
            style={styles.headerLeftBtn}>
            <ChevronLeft />
            <Text style={{ paddingVertical: 2 }}>home</Text>
          </Pressable>)}
      />
      <View>
        <FlatList
        data={cartItem}
        renderItem={({item,index}) => (
          <TouchableOpacity onPress={() => navigation.navigate('orders')} key={index} style={styles.carts}>
           <View style={{display:'flex',flexDirection:'row',gap:'10'}}>
             <Text style={styles.qty}>{item.quantity}</Text>
            <Text>{item.name}</Text>
           </View>
            <Text>{item.price}</Text>
          </TouchableOpacity>
        )}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },
  carts:{display:'flex',flexDirection:'row',gap:'10',paddingHorizontal:10,margin:4,justifyContent:'space-between'},
  qty:{borderWidth:1,padding:2,width:20,height:22,textAlign:'center',borderColor:'green'}
});
