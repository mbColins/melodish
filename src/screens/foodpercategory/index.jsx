/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/core';
import Titles from '../../components/Titles';
import { ChevronLeft } from 'lucide-react-native';
import CusinesComponents from '../../components/Cusines';

const img = require('../../assets/images/food5.jpg');


const datas = [
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
];

const FoodPerCategoryScreen = () => {
    const { t } = useTranslation();
    const route = useRoute();
    const navigation = useNavigation();
    const { name } = route.params;

    return (
        <View style={{ flex: 1 }}>
            <Header
                title={t(name)}
                headerTitleAlign="center"
                headerLeft={() => (
                    <Pressable onPress={() => navigation.goBack()}
                        style={styles.headerLeftBtn}>
                        <ChevronLeft />
                        <Text style={{ paddingVertical: 2 }}>cusines</Text>
                    </Pressable>)}
            />
            {/* name,index,description,image,price */}
            <FlatList
                data={datas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                   <CusinesComponents
                   name={item.name}
                   index={index}
                   description={item.description}
                   image={item.image}
                   price={item.price}
                   />
                )}
            />


        </View>
    );
};

export default FoodPerCategoryScreen;

const styles = StyleSheet.create({
    imgStyle: { height: 80, width: '30%', marginTop: 10, margin: 2 },
    textStyle: { marginBottom: 10 },
    productContain: { flexDirection: 'row', gap: 10, paddingHorizontal: 10 },
    headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },

});
//  renderItem={({ itm, index }) => (
//                     <View key={index}>
//                         <View>
//                             <View>
//                                 {/* <Titles text={itm.name} /> */}
//                                 <Text>{itm.description}</Text>
//                             </View>
//                             <Image source={itm.img} />
//                         </View>
//                         <Text>{itm.price}</Text>
//                     </View>
