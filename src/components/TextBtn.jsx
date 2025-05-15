import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const TextBtn = ({text,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.textBnt}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextBtn;

const styles = StyleSheet.create({
    textBnt:{color:'blue'},
});
