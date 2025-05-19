import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import Categories from '../../components/Categories';
import FilteredItemComponent from '../../components/FilteredItemComponent';
import MostPopular from '../../components/MostPopular';
import MapBtn from '../../components/MapBtn';
import SpecialCusines from '../../components/SpecialCusines';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView>
        <Categories />
        <FilteredItemComponent />
        <SpecialCusines/>
        <MostPopular />
      </ScrollView>
      <MapBtn />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
