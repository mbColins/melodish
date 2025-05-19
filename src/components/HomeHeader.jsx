/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Badge, Menu, ShoppingCart, UserPen } from 'lucide-react-native';
// import { useNavigation } from '@react-navigation/core';

const HomeHeader = () => {
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Menu color={'gray'} />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold' }}>Home</Text>
           <View style={{display:'flex',flexDirection:'row',gap:10}}>
             <TouchableOpacity>
                <ShoppingCart color={'gray'}/>
            </TouchableOpacity>
             <TouchableOpacity style={{justifyContent:'center'}}>
                <Image source={require('../assets/images/j.png')} style={styles.profileImage}/>
            </TouchableOpacity>
           </View>
        </View>
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    container: { height: 50, backgroundColor: '#fff', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 10,borderBottomWidth:0.3,borderBottomColor:'gray' },
    profileImage:{height:35,width:35,borderRadius:50,borderWidth:1}
});
