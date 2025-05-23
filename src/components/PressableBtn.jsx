import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PressableBtn = ({btnText,btnStyle,onPress,textStyle}) => {
  return (
    <Pressable onPress={onPress} style={[btnStyle]}>
      <Text style={[styles.btnTextStyle,textStyle]}>{btnText}</Text>
    </Pressable>
  );
};

export default PressableBtn;

const styles = StyleSheet.create({
  btnTextStyle:{textAlign:'center'}
});
