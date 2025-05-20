/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

import { FlatList, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { ChevronLeft, ShoppingCart } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';

const img = require('../../assets/images/j.png');

const cusines = [
    {
        'name': 'Sushi',
        'image': img,
    },
    {
        'name': 'Sushi',
        'image': img,
    },
    {
        'name': 'Sushi',
        'image': img,
    },
    {
        'name': 'Sushi',
        'image': img,
    },
    {
        'name': 'Sushi',
        'image': img,
    },
    {
        'name': 'Sushi',
        'image': img,
    },
    {
        'name': 'Sushi',
        'image': img,
    },
    {
        'name': 'Sushi',
        'image': img,
    },
    {
        'name': 'Sushi',
        'image': img,
    },
    {
        'name': 'Sushi',
        'image': img,
    },
];

const CusinesScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header
                title="Cusines"
                headerTitleAlign="center"

                headerLeft={() => (
                    <Pressable onPress={() => navigation.navigate('home')}
                        style={styles.headerLeftBtn}>
                        <ChevronLeft />
                        <Text style={{ paddingVertical: 2 }}>home</Text>
                    </Pressable>)}

                headerRight={() => (
                    <Pressable style={{ paddingRight: 10 }}>
                        <Text> <ShoppingCart color={'green'} /></Text>
                    </Pressable>)}
            />
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: '100%' }}>
                <FlatList
                    data={cusines}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('food', {name: item.name})}
                            key={index} style={styles.flatListContainer}>
                            <ImageBackground source={item.image} style={styles.cusinImg}>
                                <Text>{item.name}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                    numColumns="2"
                />
            </View>
        </View>
    );
};

export default CusinesScreen;

const styles = StyleSheet.create({
    headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },
    cusinImg: { justifyContent: 'center', alignItems: 'center', height: 200, width: 185, alignContent: 'center' },
    flatListContainer: { justifyContent: 'center', alignContent: 'center', alignItems: 'center', margin: 3 },
    container: { flex: 1 },
});
