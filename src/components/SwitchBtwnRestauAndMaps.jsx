/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

const SwitchBtwnRestauAndMaps = ({ restaurant,additionalStyle }) => {
    const navigation = useNavigation();
    const restoStyle = restaurant && { backgroundColor: 'green' };
    const mapStyle = !restaurant && { backgroundColor: 'green' };

    return (
        <View style={[styles.container,additionalStyle]}>
             <Pressable style={[styles.btnContainer, restoStyle]} onPress={() => navigation.navigate('resto')}>
                <Text style={{ color: restaurant ? '#fff' : '#000', padding: 5,textAlign:'center' }}>restaurants</Text>
            </Pressable>

         <Pressable style={[styles.btnContainer,mapStyle]} onPress={() => navigation.navigate('maps')}>
                <Text style={{ color : !restaurant ? '#fff' : '#000', padding: 5,textAlign:'center' }}>map view</Text>
            </Pressable>
        </View>
    );
};

export default SwitchBtwnRestauAndMaps;

const styles = StyleSheet.create({
    container: { display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center', marginTop: 20 },
    btnContainer: { padding: 6, borderRadius: 1, justifyContent: 'center',width:150 },
});
