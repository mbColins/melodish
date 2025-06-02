/* eslint-disable react-native/no-inline-styles */
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import Titles from './Titles';

const CusinesComponents = ({ name, index, description, image, price }) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('menu_details', { name: name })} key={index} style={{ backgroundColor: '#fff', margin: 2 }}>
            <View style={styles.productContain}>
                <View style={{ width: '70%' }}>
                    <Titles text={name} textStyle={styles.textStyle} />
                    <Text>{description}</Text>
                </View>
                <Image source={image} style={styles.imgStyle} />
            </View>
            <Text style={{ paddingLeft: 10 }}>{price}</Text>
        </Pressable>
    );
};

export default CusinesComponents;

const styles = StyleSheet.create({
    imgStyle: { height: 85, width: '27%', marginTop: 10, margin: 2 },
    productContain: { flexDirection: 'row', gap: 10, paddingHorizontal: 10 },
    textStyle:{color:'green'}


});
