import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Titles = ({text}) => {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Titles;

const styles = StyleSheet.create({
    title:{ textAlign: 'center', fontWeight: '500', fontSize: 20, marginVertical: 20 },
});
