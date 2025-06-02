/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';
import BackNavigation from '../../components/BackNavigation';
import { Star } from 'lucide-react-native';

const img = require('../../assets/images/food5.jpg')

const favResto = [
    {
        'name': 'Gamine',
        'rate': 20.00,
        'satrs': 3,
        'restoImg': img,
    },
    {
        'name': 'Gamine',
        'rate': 20.00,
        'satrs': 3,
        'restoImg': img,
    },
    {
        'name': 'Chop et yamo',
        'rate': 20.00,
        'satrs': 3,
        'restoImg': img,
    },
]

const FavouriteRestaurant = () => {
    const navigation = useNavigation()
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <Header
                title={t('profile_screen.favourite_restaurants')}
                headerTitleAlign="center"
                headerLeft={() => <BackNavigation text={t('profile')} onPress={() => navigation.goBack()} />} />
            <FlatList
                data={favResto}
                renderItem={({item,index}) => (
                    <View style={styles.favRestoContainer} key={index}>
                        <Image source={item.restoImg} style={styles.favRestoImage} />
                        <View style={{ marginVertical: 10,paddingLeft:10 }}>
                            <Text>{item.name}</Text>
                            <Text>{item.rate} <Star color={'yellow'} size={15} /> ({item.satrs})</Text>
                        </View>
                    </View>
                )}
            />

        </View>
    );
};

export default FavouriteRestaurant;

const styles = StyleSheet.create({
    container:{display:'flex'},
    favRestoImage: { height: 200, width: '98%' },
    favRestoContainer: { margin: 5, width: '100%', backgroundColor: '#fff' }
});
