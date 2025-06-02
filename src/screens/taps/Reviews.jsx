/* eslint-disable react-native/no-inline-styles */
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Star } from 'lucide-react-native';

const img = require('../../assets/images/food5.jpg');

const reviews = [
    {
        'name':'John Doe',
        'message':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem necessitatibus, dolor eveniet dolores voluptatibus tempora velit vero magni pariatur! Quod, placeat expedita. Consequuntur tenetur non aliquam debitis dolorem placeat.',
        'stars':6.0,
    },
     {
        'name':'John Doe',
        'message':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem necessitatibus, dolor eveniet dolores voluptatibus tempora velit vero magni pariatur! Quod, placeat expedita. Consequuntur tenetur non aliquam debitis dolorem placeat.',
        'stars':6.9,
    },
     {
        'name':'John Doe',
        'message':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem necessitatibus, dolor eveniet dolores voluptatibus tempora velit vero magni pariatur! Quod, placeat expedita. Consequuntur tenetur non aliquam debitis dolorem placeat.',
        'stars':6.9,
    },
];

const Reviews = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={reviews}
      renderItem={({item,index}) => (
         <View style={{backgroundColor:'#fff',padding:4,margin:4}} key={index}>
         <View style={{display:'flex',flexDirection:'row',gap:10}}>
            <Image source={img} style={{height:70,width:70,borderRadius:50}}/>
            <Text style={{paddingTop:45}}>{item.name}</Text>
        </View>
        <Text style={{textAlign:'left'}}>{item.message}</Text>
        <Text style={{marginTop:2}}><Star size={15} color={'orange'}/>{item.stars} </Text>
       </View>
      )}
      />
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
    container:{padding:4},
});
