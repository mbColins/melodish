import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PressableBtn = ({btnText,btnStyle,onPress}) => {
  return (
    <Pressable onPress={onPress} style={[btnStyle]}>
      <Text style={{textAlign:'center'}}>{btnText}</Text>
    </Pressable>
  );
};

export default PressableBtn;

const styles = StyleSheet.create({});
