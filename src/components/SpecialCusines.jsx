import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Titles from './Titles';
import { useTranslation } from 'react-i18next';
import { Star, Stars } from 'lucide-react-native';
import MapBtn from './MapBtn';

const image = require('../assets/images/melodish_icon.png');

const mostPopular = [
    {
        'name':'Bugger',
        'description':'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
        'image':image,
        'start':'stars',
    },
    {
        'name':'Bugger',
        'description':'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
        'image':image,
        'start':'stars',
    },
    {
        'name':'Bugger',
        'description':'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
        'image':image,
        'start':'stars',
    },
    {
        'name':'Bugger',
        'description':'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
        'image':image,
        'start':'stars',
    },
    {
        'name':'Bugger',
        'description':'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
        'image':image,
        'start':'stars',
    },
];

const SpecialCusines = () => {
    const { t } = useTranslation();
  return (
    <View>
        <Titles text={t('homeScreen.special_cusines')} textStyle={styles.textStyle}/>
      <FlatList
      data={mostPopular}
      renderItem={({item,index}) =>(
        <View style={styles.renderStyle} key={index}>
            <Image source={item.image} style={styles.image}/>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.start} <Star color={'orange'} size={15}/></Text>
        </View>
      )}
      horizontal
      />
    </View>
  );
};

export default SpecialCusines;

const styles = StyleSheet.create({
    textStyle:{paddingLeft:10},
    image:{height:120,width:380,paddingHorizontal:10,borderRadius:10},
    renderStyle:{margin:5,justifyContent:'center',borderWidth:0.5,padding:5,borderRadius:10},
    name:{textAlign:'left',fontWeight:'bold'},
});
