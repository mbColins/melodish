/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SwitchBtwnRestauAndMaps from '../../components/SwitchBtwnRestauAndMaps';
import { Header } from '@react-navigation/elements';
import { ChevronLeft, SlidersHorizontal } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header
        title="Restaurants"
        headerTitleAlign="center"

        headerLeft={() => (
          <Pressable onPress={() => navigation.navigate('home')}
            style={styles.headerLeftBtn}>
            <ChevronLeft />
            <Text style={{ paddingVertical: 2 }}>home</Text>
          </Pressable>)}

        headerRight={() => (
          <Pressable style={{ paddingRight: 10 }}>
            <Text> <SlidersHorizontal color={'green'} /></Text>
          </Pressable>)}
      />
      <SwitchBtwnRestauAndMaps restaurant={true} />
      <Text>RestaurantScreen</Text>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  restoStyle: { backgroundColor: 'green' },
  headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' }
});
