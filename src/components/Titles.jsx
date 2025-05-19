import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Titles = ({text,textStyle}) => {
  return (
    <View>
      <Text style={[styles.title,textStyle]}>{text}</Text>
    </View>
  );
};

export default Titles;

const styles = StyleSheet.create({
    title:{fontWeight: '500', fontSize: 20,marginTop:20},
});
