import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import Categories from '../../components/Categories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader/>
      <Categories/>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{backgroundColor:'#fff'},
});
