/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Badge, Menu, ShoppingCart } from 'lucide-react-native';
// import { useNavigation } from '@react-navigation/core';

const HomeHeader = () => {
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Menu color={'gray'} />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold' }}>Home</Text>
            <TouchableOpacity>
                <ShoppingCart color={'gray'}/>
            </TouchableOpacity>
        </View>
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    container: { height: 50, backgroundColor: '#fff', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 10,borderBottomWidth:0.3,borderBottomColor:'gray' },
});
