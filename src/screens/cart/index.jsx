/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { ChevronLeft } from 'lucide-react-native';

const CartScreen = () => {
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
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },
});
