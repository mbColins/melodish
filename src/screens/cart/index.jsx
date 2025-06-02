/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Header } from '@react-navigation/elements';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';
import ForgorPassModal from '../authentication/forgotpassword/ForgorPassModal';
import PressableBtn from '../../components/PressableBtn';
import { useTranslation } from 'react-i18next';


const cartItem = [
  {
    'quantity': 1,
    'name': 'Fried rice',
    'price': '300f',
  },
  {
    'quantity': 1,
    'name': 'Fried rice',
    'price': '300f',
  },
  {
    'quantity': 1,
    'name': 'Fried rice',
    'price': '300f',
  },
  {
    'quantity': 1,
    'name': 'Fried rice',
    'price': '300f',
  },

];

const CartScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { t } = useTranslation();

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity <= 0 ? 0 : setQuantity(() => quantity - 1);

  return (
    <View>
      <Header
        title={t('cartScreen.my_cart')}
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
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => {
              setModalVisible(!modalVisible)
              setQuantity(item.quantity)
            }} key={index} style={styles.carts}>
              <View style={{ display: 'flex', flexDirection: 'row', gap: '10' }}>
                <Text style={styles.qty}>{item.quantity}</Text>
                <Text>{item.name}</Text>
              </View>
              <Text>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ alignItems: 'center', position: 'absolute', width: '100%', top: '370%' }}>
        <PressableBtn btnText={t('cartScreen.place_order')} btnStyle={styles.btnStyle} textStyle={styles.textStyle} onPress={() => navigation.navigate('checkout')} />
      </View>
      <ForgorPassModal 
      modalVisible={modalVisible} 
      onPress={() => setModalVisible(false)}
       closeModal={() => setModalVisible(false)} cart={true}
        item_quantity={quantity}
        decrement={decrement}
        increment={increment}
        />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },
  carts: { display: 'flex', flexDirection: 'row', gap: '10', paddingHorizontal: 10, margin: 4, justifyContent: 'space-between' },
  qty: { borderWidth: 1, padding: 2, width: 20, height: 22, textAlign: 'center', borderColor: 'green', fontSize: 12 },
  btnStyle: { backgroundColor: 'green', width: '70%', borderRadius: 10, height: 30, justifyContent: 'center' },
  textStyle: { color: '#fff' }
});
