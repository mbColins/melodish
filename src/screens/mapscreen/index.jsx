/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { ChevronLeft, SlidersHorizontal } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header
        title="Map view"
        headerTitleAlign="center"
        headerLeft={() => (<Pressable
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 10 }}>
          <ChevronLeft />
        </Pressable>)}
        headerRight={() => (<Pressable style={{ paddingRight: 10 }}>
          <SlidersHorizontal color={'green'} />
        </Pressable>)}
      />
      <Text>MapScreen</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
