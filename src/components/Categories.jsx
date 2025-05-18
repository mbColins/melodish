import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const menuIMage = require('../assets/images/j.png');

const categories = [
    {
        'name': 'bred fast',
        'image': menuIMage,

    },
    {
        'name': 'bred fast',
        'image': menuIMage,

    },
    {
        'name': 'bred fast',
        'image': menuIMage,

    },
    {
        'name': 'bred fast',
        'image': menuIMage,

    },
    {
        'name': 'bred fast',
        'image': menuIMage,

    },
    {
        'name': 'bred fast',
        'image': menuIMage,

    },
    {
        'name': 'bred fast',
        'image': menuIMage,

    },

];

const Categories = () => {
    return (
        <View>
            <FlatList
                data={categories}
                renderItem={({ item, index }) => <View key={index} style={styles.catContainer}>
                    <Image source={menuIMage} style={styles.img} />
                    <Text style={styles.catName}>{item.name}</Text>

                </View>}
                horizontal
            />
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    img: { height: 70, width: 70, borderRadius: 50 },
    catName: { textAlign: 'center' },
    catContainer: { margin: 5 },
});
