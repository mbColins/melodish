import { StyleSheet,TouchableOpacity, View } from 'react-native';
import React from 'react';


const ButtonWithIcon = ({onPress,icon}) => {
  return (
    <TouchableOpacity onPress={onPress}>
     <icon />
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({});
