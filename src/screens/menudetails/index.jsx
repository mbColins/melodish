/* eslint-disable react-native/no-inline-styles */
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import Titles from '../../components/Titles';
import { Header } from '@react-navigation/elements';
import Button from '../../components/Button';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, Cross, Minus, Plane, Plus } from 'lucide-react-native';
import PressableBtn from '../../components/PressableBtn';

const img = require('../../assets/images/food5.jpg');
const img1 = require('../../assets/images/j.png');

const images = [
    {
        'image': img,
    },
    {
        'image': img,
    },
    {
        'image': img1,
    },
    {
        'image': img,
    },
];

const MenuDetailsScreen = () => {
    const route = useRoute();
    const { name } = route.params;
    const { t } = useTranslation();
    const [quantity, setQuantity] = useState(0);
    const [iamgeSrc,setImageScr] = useState(img);

    const navigation = useNavigation();

    const increment = () => setQuantity(() => quantity + 1);
    const decrement = () => quantity <= 0 ? 0 : setQuantity(() => quantity - 1);

    return (
        <View>
            <Header
                title={name}
                headerTitleAlign="left"
                headerTitleStyle={{marginHorizontal:70}}
                // eslint-disable-next-line react/no-unstable-nested-components
                headerLeft={() => (
                    <Pressable onPress={() => navigation.goBack()}
                        style={styles.headerLeftBtn}>
                        <ChevronLeft />
                         <Text style={{ paddingVertical: 2 }}>menus</Text>
                    </Pressable>)}


            />

            <View style={{ backgroundColor: '#fff', margin: 2, justifyContent: 'center', alignContent: 'center' }}>
                <Image source={iamgeSrc} style={styles.image} />
            </View>
                               <View style={{display:'flex',alignContent:'center',alignItems:'center'}}>

            <FlatList
                data={images}
                renderItem={({ item, index }) => (
                     <Pressable key={index} 
                     onPress={() => setImageScr(item.image)}
                     style={styles.meuImagesContainer}>
                        <Image source={item.image} style={styles.menuImage} />
                    </Pressable>
                )}
                horizontal
            />
               </View>
            <Text style={{ marginVertical: 15, paddingLeft: 5 }}>Goodmorning every wher Goodmorning every wher</Text>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10, gap: 10 }}>
                <PressableBtn btnText={<Minus color={'#fff'} />} btnStyle={styles.btnStyle} onPress={decrement} />
                <Text style={{ textAlign: 'center', width: 50 }}> {quantity} </Text>
                <PressableBtn btnText={<Plus color={'#fff'} />} btnStyle={styles.btnStyle} onPress={increment} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20, marginTop: 30 }}>
                <Text style={{ justifyContent: 'center', borderWidth: 1, borderRadius: 10, padding: 4, width: '30%', textAlign: 'center' }}>120FCFA</Text>
                <Button text={t('add_to_cart')} onPress={() => navigation.navigate('cart')}/>
            </View>




        </View>
    );
};

export default MenuDetailsScreen;

const styles = StyleSheet.create({
    textStyle: { paddingLeft: 20 },
    image: { height: 250, width: '95%', padding: 10, margin: 10 },
    menuImage: { height: 90, width: 87, marginHorizontal: 3, borderWidth: 1 },
    btnStyle: { backgroundColor: 'green', width: 60, borderRadius: 10 },
    headerLeftBtn: { paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },
    meuImagesContainer:{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' },

});
