import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';
import { Background } from '@react-navigation/elements';

const SwitchBtwnRestauAndMaps = ({ restaurant,additionalStyle }) => {
    const navigation = useNavigation();
    const restoStyle = restaurant && { backgroundColor: 'green' };
    const mapStyle = !restaurant && { backgroundColor: 'green' }; 

    return (
        <View style={[styles.container,additionalStyle]}>
             <Pressable style={[styles.btnContainer, restoStyle]} onPress={() => navigation.navigate('resto')}>
                <Text style={{ color: restaurant ? '#fff' : "#000", padding: 5 }}>restaurants</Text>
            </Pressable>

         <Pressable style={[styles.btnContainer,mapStyle]} onPress={() => navigation.navigate('maps')}>
                <Text style={{ color : !restaurant ? '#fff' : "#000", padding: 5 }}>map view</Text>
            </Pressable>
        </View>
    );
};

export default SwitchBtwnRestauAndMaps;

const styles = StyleSheet.create({
    container: { display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center', marginTop: 20 },
    btnContainer: { padding: 4, borderRadius: 10, justifyContent: 'center' },
});
