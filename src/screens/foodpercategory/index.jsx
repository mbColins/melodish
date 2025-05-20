/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/core';
import Titles from '../../components/Titles';
import { ChevronLeft } from 'lucide-react-native';

const img = require('../../assets/images/j.png');


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
            <FlatList
                data={datas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => navigation.navigate('menu_details', { name: item.name })} key={index} style={{ backgroundColor: '#fff', margin: 2 }}>
                        <View style={styles.productContain}>
                            <View style={{ width: '70%' }}>
                                <Titles text={item.name} textStyle={styles.textStyle} />
                                <Text>{item.description}</Text>
                            </View>
                            <Image source={item.image} style={styles.imgStyle} />
                        </View>
                        <Text style={{ paddingLeft: 10 }}>{item.price}</Text>
                    </Pressable>
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
