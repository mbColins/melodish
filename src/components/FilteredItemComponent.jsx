import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Titles from './Titles';
import { useTranslation } from 'react-i18next';
import Swiper from 'react-native-swiper';
import MapBtn from './MapBtn';

const bgImage = require('../assets/images/melodish_icon.png')

const swipperItems = [
  {
    'title': 'name',
    'image': bgImage,
  },
  {
    'title': 'name',
    'image': bgImage,
  },
  {
    'title': 'name',
    'image': bgImage,
  },
  {
    'title': 'name',
    'image': bgImage,
  },
  {
    'title': 'name',
    'image': bgImage,
  },
]

const FilteredItemComponent = () => {
  const { t } = useTranslation();
  // const cusines = true;
  return (
    <View>
      <Titles text={t('homeScreen.cusines')} textStyle={styles.textStyle} />
      <View style={styles.container}>
        <Swiper style={styles.slideView}>
          {swipperItems.map((item, index) => (
            <ImageBackground source={item.image} style={styles.slideBackground} key={index}>
              <Text style={styles.titleText}>{item.title}</Text>
            </ImageBackground>
          ))}
        </Swiper>
      </View>
    </View>
  );
};

export default FilteredItemComponent;

const styles = StyleSheet.create({
  textStyle: { paddingLeft: 10 },
  container: { height: 200, justifyContent: 'center', },
  titleText: { textAlign: 'center',color:'#fff'},
  slideBackground: { height: 200, justifyContent: 'center' }
});
