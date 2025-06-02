import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import CusinesComponents from '../../components/Cusines';
import SearchBtn from '../../components/SearchBtn';

const img = require('../../assets/images/food5.jpg');



export const datas = [
  {
    'name': 'dirty deed',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'dirty deed',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'dirty deed',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'dirty deed',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'dirty deed',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'dirty deed',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'dirty deed',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'dirty deed',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'burger',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'sandwich',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'dirty deed',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    'image': img,
  },
  {
    'name': 'dirty deed',
    'description': 'food with food to be ate and drink some botttles of beer',
    'price': '500f',
    image: img,
  },
];
const SearchScreen = () => {
  return (
    <View>
      <SearchBtn />
      <FlatList
        data={datas}
        renderItem={({ item, index }) => (
          <CusinesComponents
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            index={index}
          />
        )}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
