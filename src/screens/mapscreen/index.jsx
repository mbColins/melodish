/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { ChevronLeft, SlidersHorizontal } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';
import SwitchBtwnRestauAndMaps from '../../components/SwitchBtwnRestauAndMaps';

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header
        title="Map View"
        headerTitleAlign="center"
        headerLeft={() => (
          <Pressable
            onPress={() => navigation.navigate('home')}
            style={styles.headerLeftBtn}>
            <ChevronLeft />
            <Text style={{ paddingVertical: 2 }}>home</Text>
          </Pressable>)}

        headerRight={() => (
          <Pressable style={{ paddingRight: 10 }}>
            <Text> <SlidersHorizontal color={'green'} /></Text>
          </Pressable>)}
      />
      <SwitchBtwnRestauAndMaps restaurant={false} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  btnStyle: { backgroundColor: 'green' },
  headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' }
});
