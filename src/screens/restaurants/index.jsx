/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SwitchBtwnRestauAndMaps from '../../components/SwitchBtwnRestauAndMaps';
import { Header } from '@react-navigation/elements';
import { Car, ChevronLeft, Clock, LocationEdit, SlidersHorizontal, StarHalf } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';

const img = require('../../assets/images/food5.jpg')

const restoData = [
  {
    'name': 'chop & yamo',
    'location': 'Bonamoussadi',
    'reviews': 5,
    'time': 5,
    'distance': 5,
    image: img,
  },
  {
    'name': 'chop & yamo',
    'location': 'Bonamoussadi',
    'reviews': 5,
    'time': 5,
    'distance': 5,
    image: img,
  },
  {
    'name': 'chop & yamo',
    'location': 'Bonamoussadi',
    'reviews': 5,
    'time': 5,
    'distance': 5,
    image: img,
  },
  {
    'name': 'chop & yamo',
    'location': 'Bonamoussadi',
    'reviews': 5,
    'time': 5,
    'distance': 5,
    image: img,
  }
]

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, height: '100%' }}>
      <Header
        title="Restaurants"
        headerTitleAlign="center"

        headerLeft={() => (
          <Pressable onPress={() => navigation.navigate('home')}
            style={styles.headerLeftBtn}>
            <ChevronLeft />
            <Text style={{ paddingVertical: 2 }}>home</Text>
          </Pressable>)}

        headerRight={() => (
          <Pressable style={{ paddingRight: 10 }}>
            <Text> <SlidersHorizontal color={'green'} /></Text>
          </Pressable>)}
      />
      <SwitchBtwnRestauAndMaps restaurant={true} additionalStyle={styles.switchStyle} />
      <Text style={{ marginTop: 10 }}> {t('Restaurants in your area')} </Text>
      <View style={{ height: '100%' }}>
        <FlatList
          data={restoData}
          renderItem={({ item, index }) => (
            <TouchableOpacity
            onPress={() => navigation.navigate('resto_details',{item: item.name})}
            style={styles.restoContainer} key={index}>
              <Image source={item.image} style={styles.restoImageStyle} />
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontWeight: 500 }}>{item.name}</Text>
                <Text><LocationEdit /> {item.location}</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <Text>Reviews <StarHalf size={12} color={'yellow'} />({item.reviews})</Text>
                <Text><Clock size={12} /> {item.time} min</Text>
                <Text><Car size={12} /> {item.distance} km</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  restoStyle: { backgroundColor: 'green' },
  headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },
  switchStyle: { backgroundColor: '#fff', marginTop: 2, height: 45, padding: 3 },
  restoContainer: { margin: 2, padding: 5, backgroundColor: '#fff' },
  restoImageStyle: { height: 200, width: '100%' },

});
