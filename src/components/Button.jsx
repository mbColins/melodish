/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Button = ({text,onPress}) => {
    const { t } = useTranslation();
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={{color:'#fff'}}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
    btnContainer:{justifyContent:'center',alignContent:'center',alignItems:'center'},
    btn:{width:200,height:30,justifyContent:'center',backgroundColor:'green',alignContent:'center',alignItems:'center',borderRadius:10},
});
