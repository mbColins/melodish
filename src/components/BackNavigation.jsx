/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';

const BackNavigation = ({text,onPress}) => {
  return (
    <Pressable onPress={onPress}
            style={styles.headerLeftBtn}>
            <ChevronLeft />
            <Text style={{ paddingVertical: 2 }}>{text}</Text>
          </Pressable>
  );
};

export default BackNavigation;

const styles = StyleSheet.create({
      headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },
});
